import '../../styles/Startpage/startpageitem.scss'
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

/**
 * To update dates only change these consts
 */
const currentSemester = 'Sommersemester 2022'
const nextSemester = 'Wintersemester 2022/23'

const currentSemesterDates = {
  begin: '01.03.2022',
  end: '31.08.2022',
  lectureBegin: '21.03.2022',
  lectureEnd: '15.07.2022',
}

const nextSemesterDates = {
  begin: '01.09.2022',
  end: '28.02.2023',
  lectureBegin: '19.09.2022',
  lectureEnd: '03.02.2022',
}

const currentSemesterPruefungsanmeldung = {
  begin: '30.05.2022',
  end: '13.06.2022',
}

const mensaHours = {
  monFri: '11.30-14.30 Uhr',
  sat: 'Geschlossen',
  sun: 'Geschlossen',
}

const bibHours = {
  monFri: '9.00 bis 21.00 Uhr',
  sat: '11.00 bis 19.00 Uhr',
  sun: 'Geschlossen',
}

const StartpageItem: React.FC<{ name: string }> = ({ name }) => {
  let activeComponent

  switch (name) {
    case 'Vorlesungszeitraum':
      activeComponent = <VorlesungszeitraumContent />
      break
    case 'Prüfungsanmeldung':
      activeComponent = <PruefungszeitraumContent />
      break
    case 'Mensa':
      activeComponent = <Oeffnungszeiten place={name} />
      break
    case 'Bibliothek':
      activeComponent = <Oeffnungszeiten place={name} />
      break
  }

  const [isCollapsed, collapseCard] = useState<boolean>(true)

  const showHide = () => {
    collapseCard(!isCollapsed)
  }

  return (
    <div className="startpage-item">
      <p onClick={showHide} role="button" className="button">
        {name}{' '}
        {isCollapsed ? (
          <i className="bi bi-chevron-down right"></i>
        ) : (
          <i className="bi bi-chevron-up right"></i>
        )}
      </p>
      <Collapse in={!isCollapsed}>
        <div className="card card-body">{activeComponent}</div>
      </Collapse>
    </div>
  )
}
export default StartpageItem

const VorlesungszeitraumContent: React.FC = () => {
  return (
    <div className="zeitraum">
      <div className="divider-small"></div>
      <p className="text-center">{currentSemester}</p>
      <div className="box-wrapper">
        <div className="box">
          <p className="left">{currentSemesterDates.begin}</p>
          <p>-</p>
          <p className="right">{currentSemesterDates.end}</p>
        </div>
      </div>
      <p className="text-center small">Vorlesungen</p>
      <div className="box-wrapper">
        <div className="box">
          <p className="left">{currentSemesterDates.lectureBegin}</p>
          <p>-</p>
          <p className="right">{currentSemesterDates.lectureEnd}</p>
        </div>
      </div>
      <div className="divider-small"></div>
      <p className="text-center">{nextSemester}</p>
      <div className="box-wrapper">
        <div className="box">
          <p className="left">{nextSemesterDates.begin}</p>
          <p>-</p>
          <p className="right">{nextSemesterDates.end}</p>
        </div>
      </div>
      <p className="text-center small">Vorlesungen</p>
      <div className="box-wrapper">
        <div className="box">
          <p className="left">{nextSemesterDates.lectureBegin}</p>
          <p>-</p>
          <p className="right">{nextSemesterDates.lectureEnd}</p>
        </div>
      </div>
    </div>
  )
}

const PruefungszeitraumContent: React.FC = () => {
  return (
    <div className="zeitraum">
      <div className="divider-small"></div>
      <p className="text-center">{currentSemester}</p>
      <div className="box-wrapper">
        <div className="box">
          <p className="left">{currentSemesterPruefungsanmeldung.begin}</p>
          <p>-</p>
          <p className="right">{currentSemesterPruefungsanmeldung.end}</p>
        </div>
      </div>
    </div>
  )
}

const Oeffnungszeiten: React.FC<{ place: string }> = ({ place }) => {
  const hours = place === 'Mensa' ? mensaHours : bibHours

  return (
    <div className="oeffnungszeiten">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Montag bis Freitag: {hours.monFri}</li>
        <li className="list-group-item">Samstag: {hours.sat}</li>
        <li className="list-group-item">Sonntag: {hours.sun}</li>
      </ul>
    </div>
  )
}
