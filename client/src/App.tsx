import React, { useEffect, useState } from 'react'
import './styles/theme.scss'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import SideBar from './components/Menu/Sidebar'
import Menubar from './components/Menu/Menubar'
import Roomplan from './components/Roomplan'
import Mensaplan from './components/Mensaplan/Mensaplan'
import Klausurplan from './components/Klausurplan/Klausurplan'
import Startpage from './components/Startpage/Startpage'
import { useMediaQuery } from 'react-responsive'
import 'animate.css'
import InstallPWAReminder from './components/PWA/InstallPWAReminder'
import { useSwipeable } from 'react-swipeable'

function App() {
  const [currentPath, setCurrentPath] = useState<string>(useLocation().pathname)
  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  const [isOpen, setOpen] = React.useState(false)
  const handlers = useSwipeable({
    trackMouse: false,
    onSwipedRight: () => setOpen(true),
  })

  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  })

  const [colorTheme, switchTheme] = useState(
    localStorage.getItem('colorTheme') || 'light'
  )

  const switchColorTheme = (): void => {
    if (colorTheme == 'light') {
      localStorage.setItem('colorTheme', 'dark')
      switchTheme('dark')
    } else {
      localStorage.setItem('colorTheme', 'light')
      switchTheme('light')
    }
  }
  const actualSemester = () => {
    const today = new Date()
    const todayYear = today.getFullYear()
    const todayMonth = today.getMonth()
    const semester = todayMonth >= 3 && todayMonth <= 8 ? 'Sommer' : 'Winter'
    return semester + 'semester ' + todayYear
  }
  return (
    <div id="App" className={colorTheme}>
      <div
        {...handlers}
        style={{
          float: 'left',
          position: 'fixed',
          width: '33%',
          height: '100%',
          zIndex: '500',
        }}
      />

      <SideBar
        width={isDesktop ? '35%' : '100%'}
        themeColor={colorTheme}
        switchThemeColor={switchColorTheme}
        onStateChangeProp={(isO) => setOpen(isO)}
        isSwipedOpen={isOpen}
      />

      <div id="wrap">
        {currentPath === '/' ? null : (
          <Menubar
            route={currentPath}
            colorMode={colorTheme}
            currentSemester={actualSemester()}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={<Startpage currentSemester={actualSemester()} />}
          />
          <Route path="/raumplan" element={<Roomplan />} />
          <Route path="/klausurplan" element={<Klausurplan />} />
          <Route path="/mensaplan" element={<Mensaplan />} />
          <Route path="/links" element={<h2>Links</h2>} />
          <Route
            path="*"
            element={
              <div className="container">
                <h2>404 Site not found </h2>
              </div>
            }
          />
        </Routes>
      </div>
      <InstallPWAReminder></InstallPWAReminder>
    </div>
  )
}
export default App
