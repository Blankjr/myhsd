import '../../styles/Menu/menubar.scss'
import React, { FC } from 'react'

interface Props {
  route: string
  colorMode: string
  currentSemester: string
}

const Menubar: FC<Props> = ({ route, colorMode, currentSemester }) => {
  const getThemeColor = (): string => {
    return colorMode == 'dark' ? '#1e1c1c' : '#F8F9FA'
  }

  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', getThemeColor())
  }
  return (
    <div className="row pt-2 pb-2 mb-5" style={{ width: '100%' }}>
      <div className="col-3"></div>
      <div className="col-9">
        <div className="col-12">
          <div className="my-hsd-logo mt-2">{route}</div>
        </div>
        {route == '/mensaplan' ? (
          <div className="col-12 my-hsd-logo-subtitle">Derendorf</div>
        ) : null}
        {route == '/klausurplan' ? (
          <div className="col-12 my-hsd-logo-subtitle">{currentSemester}</div>
        ) : null}
        {route == '/raumplan' ? (
          <div className="col-12 my-hsd-logo-subtitle">Gebäude 4</div>
        ) : null}
      </div>
    </div>
  )
}
export default Menubar
