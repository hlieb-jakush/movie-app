import React from 'react'
import './Input.scss'

const Input = ({ title, type, onChange }) => {

    const onSetTitle = (e) => {
        onChange(e.target.value)
    }

    return (
        <input className='input' type={type} value={title} onChange={onSetTitle} />
    )
}

export default Input