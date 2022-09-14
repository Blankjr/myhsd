import { render, screen, cleanup } from '@testing-library/react'
import Startpage from '../../components/Startpage/Startpage'

afterEach(cleanup)

test('contains startpage', () => {
  render(<Startpage currentSemester={'Sommersemester 2022'} />)
  const linkElement = screen.getByText(/Pläne/)
  expect(linkElement).toBeInTheDocument()
})
