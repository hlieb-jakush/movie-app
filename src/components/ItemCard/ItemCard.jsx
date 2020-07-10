import React from 'react'
import Button from '../Button/Button'
import timeIcon from '../../assets/icons/calendar.svg'
import favoriteOutlineIcon from '../../assets/icons/favorite_outline.svg'
import favoriteFillIcon from '../../assets/icons/favorite_fill.svg'
import logo from '../../assets/icons/logo.svg'
import './ItemCard.scss'

const ItemCard = ({ title, poster, year, imdbID, isLiked, addFavoriteItem, deleteFavoriteItem }) => {

    const toggleFunction = (isLiked) => {
        if (!isLiked) {
            addFavoriteItem({ title, year, poster, imdbID })
        } else {
            deleteFavoriteItem(imdbID)
        }
    }

    if (poster === 'N/A') poster = logo

    return (
        <div className='card' tabIndex='0'>
            <img src={poster} alt={title} className='card__poster' />
            <div className='card__field'>
                <h2 className='card__title'>{title}</h2>
                <span className='card__year'><img src={timeIcon} alt='runtime' className='card__icon' />{year}</span>
            </div>
            <Button className='button_medium' onClick={e => toggleFunction(isLiked)}>
                <img src={isLiked ? favoriteFillIcon : favoriteOutlineIcon} alt='icon' />
                <span>{!isLiked ? 'Like it!' : 'Liked'}</span>
            </Button>
        </div>
    )
}

export default ItemCard