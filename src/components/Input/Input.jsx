import React from 'react'
import './Input.scss'

const Input = ({ value, type, onChange }) => {
    return (
        <input className='input' type={type} value={value} onChange={onChange} />
    )
}

export default Input