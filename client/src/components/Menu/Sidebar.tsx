import { slide as Menu, State } from 'react-burger-menu'
import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Menu/sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface SidebarProps {
  width: string
  themeColor: string
  switchThemeColor: () => void
  onStateChangeProp: (isOpen: boolean) => void
  isSwipedOpen: boolean
}
const Sidebar: FC<SidebarProps> = ({
  width,
  themeColor,
  switchThemeColor,
  onStateChangeProp,
  isSwipedOpen,
}) => {
  const [isOpen, setIsOpen] = useState(() => false)

  const handleStateChange = (state: State): void => {
    setIsOpen(state.isOpen)
    onStateChangeProp(state.isOpen)
  }
  const handleClose = (): void => {
    setIsOpen(false)
    onStateChangeProp(false)
  }

  useEffect(() => {
    setIsOpen(isSwipedOpen)
  }, [isSwipedOpen])
  const switchTheme = (): void => {
    switchThemeColor()
    setIsOpen(false)
  }
  const getThemeIcon = (): IconDefinition => {
    return themeColor == 'dark' ? faSun : faMoon
  }
  const _themeColor = themeColor == 'dark' ? 'light' : 'dark'

  const getBurgerIconSrc = (): string => {
    return themeColor == 'dark'
      ? 'img/hamburger-white.svg'
      : 'img/hamburger-black.svg'
  }
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', '#e60028')
  }

  return (
    <Menu
      className="overflow-hidden"
      width={width}
      burgerButtonClassName={'burger-icon'}
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)}
      customBurgerIcon={<img src={getBurgerIconSrc()} alt="menu-icon" />}
    >
      <Link
        to={'/'}
        className={isOpen ? 'opening a1' : ''}
        onClick={() => handleClose()}
        data-testid="link-homepage"
      >
        <div className="position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <i className="bi bi-house"></i>
          </div>
          <div className="text-center">Startseite</div>
        </div>
      </Link>
      <Link
        to={'/klausurplan'}
        className={isOpen ? 'opening a2' : ''}
        onClick={() => handleClose()}
        data-testid="link-klausurplan"
      >
        <div className="position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <i className="bi bi-file-earmark-spreadsheet"></i>
          </div>
          <div className="text-center">Klausurplan</div>
        </div>
      </Link>
      <Link
        to={'/mensaplan'}
        className={isOpen ? 'opening a3' : ''}
        onClick={() => handleClose()}
        data-testid="link-mensaplan"
      >
        <div className="position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <div className="text-center">Mensaplan</div>
        </div>
      </Link>
      <Link
        to={'/raumplan'}
        className={isOpen ? 'opening a4' : ''}
        onClick={() => handleClose()}
        data-testid="link-raumplan"
      >
        <div className="position-relative">
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <i className="bi bi-stack"></i>
          </div>
          <div className="text-center">Raumplan</div>
        </div>
      </Link>
      {/* <Link to={'/links'} className={isOpen ? 'opening a5' : ''} onClick={()=>handleClose()}><div className="position-relative"><div className="position-absolute top-50 start-0 translate-middle-y"><i className="bi bi-box-arrow-up-right"></i></div><div className="text-center">Links</div></div></Link>*/}
      <div className="position-fixed overflow-visible top-50 translate-middle-y navigation-bg-end">
        <div className="navigation-bg">Navigation</div>
      </div>
      <div
        className={isOpen ? 'row text-center opening a5' : 'row text-center'}
        onClick={switchTheme}
      >
        <div className="col-12 fs-7">
          Wechseln zu {_themeColor}Mode{' '}
          <FontAwesomeIcon icon={getThemeIcon()} />
        </div>
      </div>

      <div className="row text-center navigation-footer">
        <div className={isOpen ? 'opening a6 col-12' : 'col-12'}>
          Hochschule Düsseldorf
        </div>
        <div className={isOpen ? 'opening a7 col-12' : 'col-12'}>
          University of Applied Sciences
        </div>
        <div className={isOpen ? 'opening a8 col-12' : 'col-12'}>HSD</div>
      </div>
    </Menu>
  )
}
export default Sidebar
