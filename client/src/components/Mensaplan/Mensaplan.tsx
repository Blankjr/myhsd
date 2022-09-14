import '../../styles/mensaplan.scss'
import React, { useEffect, useState } from 'react'
import NavbarTop from '../NavbarTop'
import MensaplanItem from './MensaplanItem'
import { price } from './MensaplanItem'

export interface MensaMenu {
  menuTitle: string
  price: price[]
  imgSrc: string
  date: string
  subTitle: string[]
  markings: string
}

const Mensaplan = () => {
  const getActiveWeekday = (): string => {
    let activeWeekday
    activeWeekday = sessionStorage.getItem('activeWeekday')
    if (activeWeekday) {
      return activeWeekday
    }
    const currentWeekday = new Date()
      .toLocaleString('en-us', { weekday: 'long' })
      .toLocaleLowerCase()
    if (currentWeekday === 'saturday' || currentWeekday === 'sunday') {
      activeWeekday = 'friday'
    } else {
      activeWeekday = currentWeekday
    }
    return activeWeekday
  }

  let activeWeekday = getActiveWeekday()
  const [menuDataForActiveDay, setMenuDataForActiveDay] = useState<MensaMenu[]>(
    []
  )
  const [dateForMonday, setDateForMonday] = useState<string>()
  const [dateForFriday, setDateForFriday] = useState<string>()

  // Number of food for allergic
  let markings = ''
  const cutMarkingsFromTitle = (title: string): string => {
    let indexOfBrackets = title.indexOf('(')
    let titleWithoutMarkings = title

    // '(' Bracket inside title
    if (indexOfBrackets !== -1)
      titleWithoutMarkings = title.substring(0, indexOfBrackets)

    // '[' stands always before '('
    if (titleWithoutMarkings.includes('[')) {
      indexOfBrackets = title.indexOf('[')
      titleWithoutMarkings = title.substring(0, indexOfBrackets)
    }

    if (indexOfBrackets !== -1) markings += title.substring(indexOfBrackets)
    return titleWithoutMarkings
  }

  // save different title in one array
  const saveSubTitles = (
    text2: string,
    text3: string,
    text4: string,
    text5: string
  ): string[] => {
    const subTitles: string[] = []
    const tempArray: string[] = [text2, text3, text4, text5]

    tempArray.forEach((item) => {
      if (item !== '') subTitles.push(cutMarkingsFromTitle(item))
    })
    return subTitles
  }

  const getCompleteMenuData = async (): Promise<MensaMenu[]> => {
    let completeMenuData: Promise<MensaMenu[]> = Promise.resolve([])
    try {
      if (process.env.REACT_APP_API_URL) {
        const fetchedMenuData = await fetch(
          process.env.REACT_APP_API_URL + '/mensaplan/all'
        )
        if (!fetchedMenuData.ok) {
          throw new Error('Network response was not OK')
        }
        const fetchedMenuDataAsJSON = await fetchedMenuData.json()
        completeMenuData = fetchedMenuDataAsJSON.map((value: any) => {
          // eslint-disable-line
          // reset markings for new menu
          markings = ''
          const currentSubtitles: string[] = saveSubTitles(
            value.TEXTL2,
            value.TEXTL3,
            value.TEXTL4,
            value.TEXTL5
          )

          return {
            menuTitle: cutMarkingsFromTitle(value.TEXTL1),
            subTitle: currentSubtitles,
            price: [
              { name: 'Studierende', price: value.STUDIERENDE },
              { name: 'Bedienstete', price: value.BEDIENSTETE },
              { name: 'Gäste', price: value.GAESTE },
            ],
            date: value.DATUM,
            imgSrc: value.PFAD,
            markings: markings,
          }
        })
        localStorage.setItem(
          'completeMenuData',
          JSON.stringify(completeMenuData)
        )
      } else {
        console.log('REACT_APP_API_URL is unknown')
      }
    } catch (error) {
      const completeMenuDataAsString = localStorage.getItem('completeMenuData')
      if (completeMenuDataAsString) {
        const values = JSON.parse(completeMenuDataAsString)
        return values as MensaMenu[]
      }
    }
    return completeMenuData
  }

  const updateMenuDataForCurrentDay = (completeMenuData: MensaMenu[]) => {
    // find menus for selected day
    const menuDataForActiveDay = completeMenuData.filter((singleMenuData) => {
      const dateAsArray: string[] = singleMenuData.date.split('.')
      const weekdayOfMenu = new Date(
        `${dateAsArray[2]}-${dateAsArray[1]}-${dateAsArray[0]}`
      )
        .toLocaleString('en-us', { weekday: 'long' })
        .toLocaleLowerCase()

      if (weekdayOfMenu === activeWeekday) {
        return true
      }
    })

    setMenuDataForActiveDay(menuDataForActiveDay)
  }

  const getAndUpdateMenuDataForCurrentDay = async () => {
    const completeMenuData = await getCompleteMenuData()
    updateMenuDataForCurrentDay(completeMenuData)
  }

  useEffect(() => {
    getAndUpdateMenuDataForCurrentDay()
    calculateDatesForWeek()
  }, [])

  const handleSelect = (eventKey: string) => {
    activeWeekday = eventKey
    sessionStorage.setItem('activeWeekday', activeWeekday)
    getAndUpdateMenuDataForCurrentDay()
    calculateDatesForWeek()
  }

  const calculateDatesForWeek = (): void => {
    const currentDay: Date = new Date()
    currentDay.setDate(
      currentDay.getDate() -
        (currentDay.getDay() === 0 ? 6 : currentDay.getDay() - 1)
    )
    setDateForMonday(currentDay.toLocaleDateString())

    currentDay.setDate(
      currentDay.getDate() -
        (currentDay.getDay() === 0 ? 6 : currentDay.getDay() - 5)
    )
    setDateForFriday(currentDay.toLocaleDateString())
  }

  const displayElements = [
    { displayName: 'Montag', internalKey: 'monday' },
    { displayName: 'Dienstag', internalKey: 'tuesday' },
    { displayName: 'Mittwoch', internalKey: 'wednesday' },
    { displayName: 'Donnerstag', internalKey: 'thursday' },
    { displayName: 'Freitag', internalKey: 'friday' },
  ]

  return (
    <div className="container mt-3 mensaplan" data-testid="mensaplan">
      <div className="col-12 fw-7 my-hsd-font">
        &nbsp;{dateForMonday} - {dateForFriday}
      </div>

      <NavbarTop
        {...{
          displayElements,
          activeKey: activeWeekday,
          onSelect: handleSelect,
        }}
      />
      <div className="row  mt-3 d-flex justify-content-center">
        {menuDataForActiveDay.map((data, index) => (
          <MensaplanItem
            key={index}
            menuTitle={data.menuTitle}
            price={data.price}
            imgSrc={data.imgSrc}
            subTitle={data.subTitle}
            markings={data.markings}
          />
        ))}
      </div>
      <hr />

      <div className="row">
        <div className="col-12 pb-2 justify-content-center d-flex">
          <a
            className="text-white"
            href="https://www.stw-d.de/wp-content/uploads/2017/07/Zeichenerklaerung.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi bi-link-45deg"></i> Kennzeichnungen(PDF)
          </a>
        </div>
      </div>
      <div className="position-fixed overflow-visible top-50 translate-middle-y klausurplan-bg-end">
        <div className="klausurplan-bg">Mensaplan</div>
      </div>
    </div>
  )
}
export default Mensaplan
