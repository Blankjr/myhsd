import { render, screen, cleanup } from '@testing-library/react'
import InputItem from '../../components/Klausurplan/InputItem'
import React from 'react'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

describe('testing html selected', () => {
  const title = 'Studiengang'
  const options = [
    { value: 'BMI', label: 'B.Sc. Medieninformatik' },
    { value: 'BMT', label: 'B.Eng. Medientechnik' },
    { value: 'DAISY', label: 'B.Sc. DAISY' },
  ]

  test('show correct data ', () => {
    render(
      <InputItem
        title={title}
        options={options}
        handleInputChange={() => console.log('')}
      />
    )
    const linkElement = screen.getByText('B.Sc. Medieninformatik')
    expect(screen.getByTestId('htmlSelect')).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
  })
  test('show correct types ', () => {
    render(
      <InputItem
        title={title}
        options={options}
        handleInputChange={() => console.log('')}
      />
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getAllByRole('option').length).toEqual(options.length + 1)
  })

  test('correct selected option event  ', () => {
    render(
      <InputItem
        title={title}
        options={options}
        handleInputChange={() => console.log('')}
      />
    )
    const linkElement = screen.getByTestId('htmlSelect')
    userEvent.selectOptions(linkElement, 'BMI')

    let option = screen.getByRole('option', {
      name: 'B.Sc. Medieninformatik',
    }) as HTMLOptionElement
    expect(option.selected).toBe(true)
    option = screen.getByRole('option', {
      name: 'B.Sc. DAISY',
    }) as HTMLOptionElement
    expect(option.selected).toBe(false)
    option = screen.getByRole('option', {
      name: 'B.Eng. Medientechnik',
    }) as HTMLOptionElement
    expect(option.selected).toBe(false)
  })
})

describe('testing html input', () => {
  test('correct type', () => {
    render(
      <InputItem title={'Suche'} handleInputChange={() => console.log('')} />
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('correct search string', () => {
    render(
      <InputItem title={'Suche'} handleInputChange={() => console.log('')} />
    )
    const linkElement = screen.getByTestId('htmlInput') as HTMLInputElement
    userEvent.type(linkElement, 'IT-Sicherheit')
    expect(linkElement.value).toBe('IT-Sicherheit')
  })
})
