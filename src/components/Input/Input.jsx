import React from 'react'
import './Input.scss'

const Input = ({ title, onChange }) => {

    const onSetTitle = (e) => {
        onChange(e.target.value)
    }

    return (
        <input className='input' value={title} onChange={onSetTitle} />
    )
}

export default Input