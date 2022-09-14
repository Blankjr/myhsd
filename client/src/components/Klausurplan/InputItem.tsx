import React, { FC } from 'react'

interface option {
  value: string
  label: string
}

interface InputItemProps {
  title: string
  options?: option[]
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void
}

const InputItem: FC<InputItemProps> = ({
  title,
  options,
  handleInputChange,
}) => {
  const renderInput = () => {
    if (options) {
      return (
        <select
          className="input-item-input rounded-4 py-2"
          name="option"
          data-testid="htmlSelect"
          onChange={(event) => handleInputChange(event)}
        >
          <option value={''}></option>
          {options.map(({ value, label }, index) => (
            <option value={value} key={index}>
              {label}
            </option>
          ))}
        </select>
      )
    }
    return (
      <input
        className="input-item-input rounded-4 py-2"
        type="text"
        onChange={(event) => handleInputChange(event)}
        data-testid="htmlInput"
      />
    )
  }

  return (
    <div className="col-12 col-lg-6 klausurItem rounded-4 py-1 m-1">
      <div className="row">
        <div className="col-4 d-flex align-items-center fs-7">
          <div className="text-truncate">{title}</div>
        </div>
        <div className="col-8 d-flex align-items-center my-0">
          {renderInput()}
        </div>
      </div>
    </div>
  )
}
export default InputItem
