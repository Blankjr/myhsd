import { render, screen, cleanup } from '@testing-library/react'
import StartpageItem from '../../components/Startpage/StartpageItem'

afterEach(cleanup)

test('contains startpage', () => {
  render(<StartpageItem name="Test" />)
  const linkElement = screen.getByText(/Test/)
  expect(linkElement).toBeInTheDocument()
})
