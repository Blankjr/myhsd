import '../styles/roomplan.scss'
import { useState } from 'react'
import NavbarTop from './NavbarTop'

const Roomplan = () => {
  const displayElements = [
    {
      displayName: 'EG',
      internalKey: 'etage-0',
      imgSrcLight: '/img/raumplan_etage-0-hell.webp',
      imgSrcDark: '/img/raumplan_etage-0.webp',
    },
    {
      displayName: 'Etage 1',
      internalKey: 'etage-1',
      imgSrcLight: '/img/raumplan_etage-1-hell.webp',
      imgSrcDark: '/img/raumplan_etage-1.webp',
    },
    {
      displayName: 'Etage 2',
      internalKey: 'etage-2',
      imgSrcLight: '/img/raumplan_etage-2-hell.webp',
      imgSrcDark: '/img/raumplan_etage-2.webp',
    },
    {
      displayName: 'Etage 3',
      internalKey: 'etage-3',
      imgSrcLight: '/img/raumplan_etage-3-hell.webp',
      imgSrcDark: '/img/raumplan_etage-3.webp',
    },
  ]

  const getActiveFloor = (): string => {
    const activeFloor = sessionStorage.getItem('activeFloor')
    if (activeFloor) {
      return activeFloor
    }
    return 'etage-0'
  }

  const getImgSrcFor = (activeFloor: string): string => {
    const possibleImgSrc = displayElements.find((displayElement) => {
      if (displayElement.internalKey === activeFloor) {
        return true
      }
    })
    return localStorage.getItem('colorTheme') === 'light'
      ? possibleImgSrc?.imgSrcLight || ''
      : possibleImgSrc?.imgSrcDark || ''
  }

  const activeFloor = getActiveFloor()
  const [imgSrc, setImgSrc] = useState(getImgSrcFor(activeFloor))

  const handleSelect = (eventKey: string) => {
    sessionStorage.setItem('activeFloor', eventKey)
    setImgSrc(getImgSrcFor(eventKey))
  }

  return (
    <div className="container mt-3 raumplan" data-testid="raumplan">
      <div className="switch-plan">
        <NavbarTop
          {...{
            displayElements,
            activeKey: activeFloor,
            onSelect: handleSelect,
          }}
        ></NavbarTop>
      </div>
      <div className="plan-picture">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10 col-xl-8">
            <img
              src={imgSrc}
              className="object-fit-cover"
              alt="roomplan_image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roomplan
