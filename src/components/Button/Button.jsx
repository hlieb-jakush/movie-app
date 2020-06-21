import React from 'react'
import './Button.scss'

const Button = ({ className, id, children, onClick }) => {
    return (
        <button className={`button ${className ? className : ''}`} onClick={onClick} id={id}>{children}</button>
    )
}

export default Button