import React, { FC } from 'react'

export interface KlausurplanItemProps {
  id: number
  date: string
  daysLeft: string
  subjectTitle: string
  title?: string
  firstExaminer: string
  secondExaminer: string
  room: string
  duration: string
  startTime: string
  handleBookmark: (examToSaveID: number, bookmark: boolean) => void
  bookmark: boolean
  course: string
}

const KlausurplanItem: FC<KlausurplanItemProps> = ({
  id,
  date,
  daysLeft,
  subjectTitle,
  title,
  firstExaminer,
  secondExaminer,
  room,
  duration,
  startTime,
  handleBookmark,
  bookmark,
}) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    bookmark = !bookmark
    handleBookmark(id, bookmark)
  }

  const renderTitle = () => {
    if (title)
      return (
        <div>
          <div className="row">
            <div className="col-12 head-title">Titel</div>
          </div>
          <div className="row">
            <div className="col-12 text-truncate">{title}</div>
          </div>
        </div>
      )
  }
  const renderBookmarkButton = () => {
    return (
      <div className="col-2 d-flex justify-content-end top-0 end-0 position-absolute m-2">
        <button
          className=" btn btn-link btn-sm shadow-none"
          onClick={handleButtonClick}
        >
          <i
            className={
              bookmark
                ? 'bi fs-5 bi-bookmark-star-fill highlight-color'
                : 'bi fs-5 bi-bookmark-star-fill'
            }
          ></i>
        </button>
      </div>
    )
  }
  const renderDateExam = () => {
    if (date !== 'T.n.V.')
      return (
        <div className="row my-3">
          <div className="col-5 text-truncate">am {date}</div>
          <div className="col-7 d-flex justify-content-end">
            <div className="col-10 d-flex justify-content-end mx-2">
              in{' '}
              <span className="highlight-color text-truncate">
                &nbsp;{daysLeft}&nbsp;
              </span>{' '}
              Tagen
            </div>
            {renderBookmarkButton()}
          </div>
        </div>
      )
    else
      return (
        <div className="row my-3">
          <div className="col-7 d-flex justify-content-end">
            {renderBookmarkButton()}
          </div>
        </div>
      )
  }
  const render2Examiner = () => {
    if (secondExaminer)
      return (
        <div className="col-12 text-truncate">
          <span className="head-title">2.</span> {secondExaminer}
        </div>
      )
  }

  const renderRoom = () => {
    if (room !== 'n.V.')
      return (
        <div className="col-6">
          <div className="col-12 head-title">Raum</div>
          <div className="col-12 text-truncate">{room}</div>
        </div>
      )
  }

  const renderTime = () => {
    if (startTime !== 'n.V.')
      return (
        <div className="col-6">
          <div className="col-12 head-title">Uhrzeit</div>
          <div className="col-12 text-truncate">{startTime}</div>
        </div>
      )
  }

  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="klausurItem mx-1 row rounded-4 pb-4">
        {renderDateExam()}

        <div className="row mb-3">
          <div className="row">
            <div className="col-12 head-title">Fach</div>
          </div>
          <div className="row">
            <div className="col-12 text-truncate">{subjectTitle}</div>
          </div>
          {renderTitle()}
        </div>

        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-12 head-title">Prüfer</div>
              <div className="col-12 text-truncate">
                <span className="head-title">1.</span> {firstExaminer}
              </div>
              {render2Examiner()}
            </div>
          </div>

          <div className="col-6">
            <div className="row">
              {renderRoom()}
              {renderTime()}
              <div className="col-12 head-title">Dauer</div>
              <div className="col-12 text-truncate">{duration}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default KlausurplanItem
