import React from 'react'
import time from '../../assets/icons/calendar.svg'
import './ItemCard.scss'

const ItemCard = ({ title, poster, year }) => {
    return (
        <div className='card' tabIndex='0'>
            <img src={poster} alt={title} className='card__poster' />
            <div className='card__field'>
                <h2 className='card__title'>{title}</h2>
                <span className='card__year'><img src={time} alt='runtime' className='card__icon' />{year}</span>
            </div>
        </div>
    )
}

export default ItemCard