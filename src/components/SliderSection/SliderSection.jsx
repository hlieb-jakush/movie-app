import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
import ItemCard from '../ItemCard/ItemCard'
import left from '../../assets/icons/left.svg'
import right from '../../assets/icons/right.svg'
import './SliderSection.scss'

const SliderSection = ({ title, type, page, list, favorite, addResultListThunk, setSearchPage, addFavoriteItem, deleteFavoriteItem }) => {

    const slider = useRef(null)
    const [loading, setLoading] = useState(false)

    const buttonFunction = (e) => {
        const sliderBlock = slider.current
        let scrollSize = sliderBlock.clientWidth
        if (e.currentTarget.getAttribute('id') === 'prev') scrollSize = -scrollSize
        sliderBlock.scrollBy({ left: scrollSize, top: 0, behavior: "smooth" })
    }

    const scrollFunction = (e) => {
        if (slider.current.scrollWidth - (slider.current.scrollLeft + slider.current.clientWidth) < slider.current.clientWidth && !loading) {
            setLoading(true)
            setSearchPage(page + 1)
            addResultListThunk(title, type, page + 1)
            setTimeout(() => setLoading(false), 3000)
        }
    }

    useEffect(() => {
        const sliderBlock = slider.current
        sliderBlock.scrollTo({ left: 0, top: 0, behavior: "smooth" })
    }, [title, type])

    return (
        <section className={`slider ${!list ? 'slider_hidden' : ''}`}>
            <Container>
                <div className='slider__block'>
                    <div className='slider__navigation'>
                        <Button className='slider__button' id='prev' onClick={buttonFunction}>
                            <img className='header__icon' src={left} alt='logo' />
                            <span className='header__title'>Prev</span>
                        </Button>
                        <Button className='slider__button' id='next' onClick={buttonFunction}>
                            <span className='header__title'>Next</span>
                            <img className='header__icon' src={right} alt='logo' />
                        </Button>
                    </div>
                    <div className="slider__carousel" ref={slider} onScroll={scrollFunction}>
                        {list && list.map(item => (
                            <ItemCard
                                title={item.Title}
                                poster={item.Poster}
                                year={item.Year}
                                imdbID={item.imdbID}
                                isLiked={favorite && favorite.find(profileItem => profileItem.imdbID === item.imdbID)}
                                addFavoriteItem={addFavoriteItem}
                                deleteFavoriteItem={deleteFavoriteItem}
                                key={`${item.Title}-${item.Year}`} />
                        )
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SliderSection