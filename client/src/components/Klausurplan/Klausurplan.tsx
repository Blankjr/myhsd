import '../../styles/Klausurplan/klausurplan.scss'
import '../../styles/Klausurplan/toast.scss'
import KlausurplanItem from './KlausurplanItem'
import { useEffect, useState } from 'react'
import InputItem from './InputItem'
import React from 'react'
import { KlausurplanItemProps } from './KlausurplanItem'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { List } from 'react-content-loader'

export const calculateLeftDaysUntilExam = (examDateString: string): string => {
  if (examDateString == 'T.n.V.') {
    return '-'
  } else {
    const [day, month, year] = examDateString.split('.')
    const examDate = new Date(+year, +month - 1, +day)
    const now = new Date()
    const diffTime = examDate.getTime() - now.getTime()
    if (diffTime < 0) return '-'
    else {
      const diffDays = diffTime / (1000 * 3600 * 24)
      return Math.ceil(diffDays).toString()
    }
  }
}

const toastNotification = (message: string) =>
  toast(message, {
    position: 'bottom-center',
    autoClose: 1500,
  })

const Klausurplan = () => {
  const [examScheduleBookmarks, setExamScheduleBookmarks] = useState<
    KlausurplanItemProps[]
  >([])

  // loading state for full list
  const [showLoading, setShowLoading] = useState<boolean>(true)

  useEffect(() => {
    getBookmarkSchedule()
  }, [])

  //update localstorage if bookmarks change
  useEffect(() => {
    localStorage.removeItem('examScheduleBookmarks')
    localStorage.setItem(
      'examScheduleBookmarks',
      JSON.stringify(examScheduleBookmarks)
    )
  }, [examScheduleBookmarks])

  const [examScheduleAll, setExamScheduleAll] = useState<
    KlausurplanItemProps[]
  >([])
  // Update all exams by changing examScheduleBookmarks
  useEffect(() => {
    const promise = getAndUpdateExamSchedule()
    promise.then(() => {
      setShowLoading(false)
    })
  }, [examScheduleBookmarks])

  const [showAllExams, setShowAllExams] = useState<boolean>(true)
  const [filterAllExams, setFilterAllExams] = useState<KlausurplanItemProps[]>(
    []
  )
  const [filterCourse, setFilterCourse] = useState<string>('')
  const [filterPO, setFilterPO] = useState<string>('')
  const [filterSearch, setFilterSearch] = useState<string>('')
  useEffect(() => {
    updateFilterExams()
  }, [filterCourse, filterPO, filterSearch, examScheduleAll])

  const getCompleteExamSchedule = async (): Promise<KlausurplanItemProps[]> => {
    let completeExamSchedule: Promise<KlausurplanItemProps[]> = Promise.resolve(
      []
    )
    try {
      if (process.env.REACT_APP_API_URL) {
        const fetchedExamSchedule = await fetch(
          process.env.REACT_APP_API_URL + '/pruefungsplan/all'
        )
        if (!fetchedExamSchedule.ok) {
          throw new Error('Network response was not OK')
        }

        const fetchedExamScheduleAsJSON = await fetchedExamSchedule.json()
        // set ids for the elements to find in array
        let count = 0
        completeExamSchedule = fetchedExamScheduleAsJSON.map((value: any) => {
          // eslint-disable-line

          //Search element in bookmarksArray
          const examInBookmarks = examScheduleBookmarks.find(
            (element) => element.id === count
          )
          if (examInBookmarks) {
            count++
            examInBookmarks.daysLeft = calculateLeftDaysUntilExam(
              examInBookmarks.date
            )
            return examInBookmarks
          } else {
            //Only necessary properties are saved
            return {
              id: count++,
              date: value.Datum,
              daysLeft: calculateLeftDaysUntilExam(value.Datum),
              subjectTitle: value.Fachname,
              title: value.Titel,
              firstExaminer: value['1.PrüferIn'],
              secondExaminer: value['2.PrüferIn'],
              room: value.Raum,
              duration: value.Dauer,
              startTime: value.Beginn,
              bookmark: false,
              course: value['Studieng.'],
            }
          }
        })
        localStorage.setItem(
          'completeExamSchedule',
          JSON.stringify(completeExamSchedule)
        )
      } else {
        console.log('REACT_APP_API_URL is unknown')
      }
    } catch (error) {
      // offline get ExamSchedule from localstorage
      const completeExamScheduleAsString: string | null = localStorage.getItem(
        'completeExamSchedule'
      )
      if (completeExamScheduleAsString) {
        const values = JSON.parse(completeExamScheduleAsString)
        return values as KlausurplanItemProps[]
      }
    }
    return completeExamSchedule
  }

  const getAndUpdateExamSchedule = async () => {
    const completeExamSchedule = await getCompleteExamSchedule()
    setExamScheduleAll(completeExamSchedule)
    updateFilterExams()
  }

  // get bookmarks from localstorage
  const getBookmarkSchedule = () => {
    const bookmarkScheduleAsString = localStorage.getItem(
      'examScheduleBookmarks'
    )
    if (bookmarkScheduleAsString) {
      setExamScheduleBookmarks(
        JSON.parse(bookmarkScheduleAsString) as KlausurplanItemProps[]
      )
    }
  }

  //switch between allExams and myExams
  const handleSwitch = (showAll: boolean) => {
    setShowAllExams(showAll)
    setFilterPO('')
    setFilterSearch('')
    setFilterCourse('')
    const newFilterExams = [...examScheduleAll]
    setFilterAllExams(newFilterExams)
  }

  //click bookmark icon
  const handleBookmark = (examID: number, bookmark: boolean) => {
    const examToHandleIndex = examScheduleAll.findIndex(
      (element) => element.id === examID
    )
    let newExamScheduleBookmarks = [...examScheduleBookmarks]

    if (examToHandleIndex >= 0) {
      const newExamScheduleAll = [...examScheduleAll]
      newExamScheduleAll[examToHandleIndex].bookmark = bookmark
      setExamScheduleAll(newExamScheduleAll)

      //Add Exam to BookmarksArray
      if (bookmark) {
        toastNotification('zu "meine Prüfungen" hinzugefügt.')
        newExamScheduleBookmarks.push(examScheduleAll[examToHandleIndex])
      }
      //Remove Exam from BookmarksArray
      else {
        toastNotification('von "meine Prüfungen" entfernt.')
        newExamScheduleBookmarks = newExamScheduleBookmarks.filter(
          (element) => element.id !== examID
        )
      }

      setExamScheduleBookmarks(newExamScheduleBookmarks)
    }
  }

  // use filter values
  const updateFilterExams = () => {
    let newFilteredExams = [...examScheduleAll]
    newFilteredExams = newFilteredExams.filter(
      (item) =>
        (item.subjectTitle
          ?.toUpperCase()
          .includes(filterSearch.toUpperCase()) ||
          item.title?.toUpperCase().includes(filterSearch.toUpperCase())) &&
        item.course.includes(filterCourse + filterPO)
    )

    setFilterAllExams(newFilteredExams)
  }

  // filter handling and set names
  const inputTitleForFilter = ['Studiengang', 'Prüfungsordnung']

  const handleInputChangeSelect = (type: string, value: string) => {
    if (type === inputTitleForFilter[0]) setFilterCourse(value)
    if (type === inputTitleForFilter[1]) setFilterPO(value)
  }

  const handleInputChangeSearch = (value: string) => {
    setFilterSearch(value)
  }

  const renderSwitchButtons = () => {
    return (
      <div className="row mb-4">
        <div className="col-6">{renderAllExamsButton()}</div>
        <div className="col-6">{renderMyExamsButton()}</div>
      </div>
    )
  }

  const renderAllExamsButton = () => {
    return (
      <button
        className={
          showAllExams
            ? 'col-12 klausurItem head-title rounded-4 p-1 highlight-color'
            : 'col-12 klausurItem head-title rounded-4 p-1'
        }
        onClick={() => handleSwitch(true)}
      >
        <div className="row">
          <div className="col-9 d-flex text-center justify-content-center align-items-center fs-7">
            Alle Prüfungen
          </div>
          <div className="col-3 d-flex align-items-center">
            <i
              className={
                showAllExams
                  ? 'bi fs-4 bi-file-earmark-text highlight-color'
                  : 'bi fs-4 bi-file-earmark-text'
              }
            ></i>
          </div>
        </div>
      </button>
    )
  }

  const renderMyExamsButton = () => {
    return (
      <button
        className={
          showAllExams
            ? 'col-12 klausurItem rounded-4 p-1 position-relative'
            : 'col-12 klausurItem rounded-4 p-1 highlight-color position-relative'
        }
        onClick={() => handleSwitch(false)}
      >
        <div className="row">
          <div className="col-3 d-flex text-center justify-content-center align-items-center">
            <i
              className={
                showAllExams
                  ? 'bi fs-4 bi-bookmark-star-fill'
                  : 'bi fs-4 bi-bookmark-star-fill highlight-color'
              }
            ></i>
          </div>
          <div className="col-9 d-flex align-items-center fs-7">
            Meine Prüfungen
          </div>
        </div>
      </button>
    )
  }

  const renderLoading = () => {
    if (showLoading) {
      return [...Array(10)].map((i, index) => {
        return (
          <div className="col-12 col-md-6 col-xl-4 mb-4" key={index}>
            <div className="klausurItem mx-1 row rounded-4 pb-4">
              <List style={{ paddingTop: '1em' }} />
            </div>
          </div>
        )
      })
    } else {
      return ''
    }
  }

  const renderExams = () => {
    if (showAllExams)
      return filterAllExams.map((data) => (
        <KlausurplanItem
          key={data.id}
          id={data.id}
          date={data.date}
          daysLeft={data.daysLeft}
          subjectTitle={data.subjectTitle}
          title={data.title}
          room={data.room}
          duration={data.duration}
          firstExaminer={data.firstExaminer}
          secondExaminer={data.secondExaminer}
          startTime={data.startTime}
          handleBookmark={handleBookmark}
          bookmark={data.bookmark}
          course={data.course}
        />
      ))
    //Show MyExams
    else
      return examScheduleBookmarks.map((data) => (
        <KlausurplanItem
          key={data.id}
          id={data.id}
          date={data.date}
          daysLeft={data.daysLeft}
          subjectTitle={data.subjectTitle}
          title={data.title}
          room={data.room}
          duration={data.duration}
          firstExaminer={data.firstExaminer}
          secondExaminer={data.secondExaminer}
          startTime={data.startTime}
          handleBookmark={handleBookmark}
          bookmark={data.bookmark}
          course={data.course}
        />
      ))
  }
  const renderHint = () => {
    if (!showAllExams && examScheduleBookmarks.length == 0) {
      return (
        <div className="row mx-auto mb-4">
          <div className="mt-5 col-12 text-center hsd-font">
            Füge Klausuren welche du dieses Semester schreibst hier hinzu, damit
            du einen Überblick über deine kommenden Klausuren hast.
          </div>
          <div className="mt-4 col-12 text-center triangle hsd-font">
            <i className="bi bi-exclamation-triangle fs-0"></i>
          </div>
          <div className="col-12 text-center mb-2 text-danger hsd-font">
            Achtung
          </div>
          <div className="col-12 text-center text-danger hsd-font">
            Dies ersetzt nicht die Klausuranmeldung im OSSC!
          </div>
        </div>
      )
    } else {
      return (
        <div className="row mx-auto mb-4">
          <div className="mt-4 col-12 text-center triangle hsd-font">
            <i className="bi bi-exclamation-triangle fs-0"></i>
          </div>
          <div className="col-12 text-center mb-2 text-danger hsd-font">
            Achtung
          </div>
          <div className="col-12 text-center text-danger hsd-font">
            Dies ersetzt nicht die Klausuranmeldung im OSSC!
          </div>
        </div>
      )
    }
  }

  return (
    <div className="container mt-3 klausurplan" data-testid="klausurplan">
      <div className="position-fixed overflow-visible top-50 translate-middle-y klausurplan-bg-end">
        <div className="klausurplan-bg">Klausurplan</div>
      </div>

      {renderSwitchButtons()}
      <div className="row m-0 position-relative mb-3">
        {showAllExams ? (
          <InputItem
            title={inputTitleForFilter[0]}
            options={[
              { value: 'BMI', label: 'B.Sc. Medieninformatik' },
              { value: 'BMT', label: 'B.Eng. Medientechnik' },
              { value: 'BTB', label: 'B.Eng. Ton und Bild' },
              { value: 'MMI', label: 'M.Sc. Medieninformatik' },
              { value: 'DAISY', label: 'B.Sc. DAISY' },
            ]}
            handleInputChange={(event) => {
              handleInputChangeSelect(
                inputTitleForFilter[0],
                event.target.value
              )
            }}
          />
        ) : null}
        {showAllExams ? (
          <InputItem
            title={inputTitleForFilter[1]}
            options={[
              { value: '18', label: 'PO_2018' },
              { value: '10', label: 'PO_2010' },
              { value: '21', label: 'PO_2021' },
            ]}
            handleInputChange={(event) => {
              handleInputChangeSelect(
                inputTitleForFilter[1],
                event.target.value
              )
            }}
          />
        ) : null}
        {showAllExams ? (
          <InputItem
            title={'Suche'}
            handleInputChange={(event) =>
              handleInputChangeSearch(event.target.value)
            }
          />
        ) : null}
      </div>

      <div className="row">
        {renderLoading()}
        {renderExams()}
        {renderHint()}
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}
export default Klausurplan
