import React from 'react'

const FormGroup = ({label, placeholder ,type}) => {
  return (
     <div className="form-group">
                <input type={type} id={label} name={label} required></input>
                <label htmlfor={label}>{label}</label>
            </div>

    )
}

export default FormGroup