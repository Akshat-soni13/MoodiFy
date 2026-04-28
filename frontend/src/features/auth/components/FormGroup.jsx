import React from 'react'

const FormGroup = ({label, placeholder ,type,value,onChange}) => {
  return (
    <div className="form-group">

      <label htmlFor={label}>
        {label}
      </label>

      <input
        id={label}
        name={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />

    </div>
  )
}

export default FormGroup