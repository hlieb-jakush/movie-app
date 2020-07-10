import React from 'react'
import Button from '../Button/Button'
import './ProfileListItem.scss'

const ProfileListItem = ({ title, type, poster, imdbID, onSearch, onDelete, isHistory, isFavorite }) => {
    return (
        <li className='list-item'>
            {isFavorite && <img src={poster} alt='poster' className='list-item__poster' />}
            <span className='list-item__title'>{title}{type && ` (${type})`}</span>
            {isHistory && <Button className='button_outlined' onClick={e => onSearch(title, type, 1, false)}>Search</Button>}
            {isFavorite && <Button className='button_outlined' onClick={e => onDelete(imdbID)}>Delete</Button>}
        </li>
    )
}

export default ProfileListItem