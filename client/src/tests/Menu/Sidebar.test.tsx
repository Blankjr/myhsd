import { render, screen, cleanup } from '@testing-library/react'
import App from '../../App'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import './matchMedia.mock'
import Sidebar from '../../components/Menu/Sidebar'
afterEach(cleanup)

const switchColorTheme = (): void => {
  console.log('switchColorTheme triggered')
}

describe('check to contain all links', () => {
  test('includes homepage', () => {
    render(
      <BrowserRouter>
        <Sidebar
          width={'300px'}
          themeColor={'dark'}
          switchThemeColor={switchColorTheme}
          onStateChangeProp={() => true}
          isSwipedOpen={true}
        />
      </BrowserRouter>
    )
    const element = screen.getByTestId('link-homepage')
    expect(element).toBeInTheDocument()
  })

  test('includes raumplan', () => {
    render(
      <BrowserRouter>
        <Sidebar
          width={'100%'}
          themeColor={'dark'}
          switchThemeColor={switchColorTheme}
          onStateChangeProp={() => true}
          isSwipedOpen={true}
        />
      </BrowserRouter>
    )
    const element = screen.getByTestId('link-raumplan')
    expect(element).toBeInTheDocument()
  })
  test('includes mensaplan', () => {
    render(
      <BrowserRouter>
        <Sidebar
          width={'300px'}
          themeColor={'dark'}
          switchThemeColor={switchColorTheme}
          onStateChangeProp={() => true}
          isSwipedOpen={true}
        />
      </BrowserRouter>
    )
    const element = screen.getByTestId('link-mensaplan')
    expect(element).toBeInTheDocument()
  })
  test('includes klausurplan', () => {
    render(
      <BrowserRouter>
        <Sidebar
          width={'300px'}
          themeColor={'dark'}
          switchThemeColor={switchColorTheme}
          onStateChangeProp={() => true}
          isSwipedOpen={true}
        />
      </BrowserRouter>
    )
    const element = screen.getByTestId('link-klausurplan')
    expect(element).toBeInTheDocument()
  })
})

describe('The correct link targets are checked', () => {
  test('link to mensaplan', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const link = screen.getByTestId('link-mensaplan')
    expect(link).toHaveAttribute('href', '/mensaplan')
    userEvent.click(link)
    expect(screen.getByTestId('mensaplan')).toBeInTheDocument()
  })

  test('link to raumplan', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const link = screen.getByTestId('link-raumplan')
    expect(link).toHaveAttribute('href', '/raumplan')
    userEvent.click(link)
    expect(screen.getByTestId('raumplan')).toBeInTheDocument()
  })

  test('link to klausurplan', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const link = screen.getByTestId('link-klausurplan')
    expect(link).toHaveAttribute('href', '/klausurplan')
    userEvent.click(link)
    expect(screen.getByTestId('klausurplan')).toBeInTheDocument()
  })
  test('link to homepage', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const anotherPage = screen.getByTestId('link-raumplan')
    userEvent.click(anotherPage)
    const link = screen.getByTestId('link-homepage')
    expect(link).toHaveAttribute('href', '/')
    userEvent.click(link)
    expect(screen.getByTestId('homepage')).toBeInTheDocument()
  })
})
