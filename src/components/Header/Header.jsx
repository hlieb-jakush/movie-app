import React, { useRef } from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
import './Header.scss'

const Header = ({ icon, title }) => {

    const nav = useRef(null)

    const openMenu = (e) => {
        e.currentTarget.classList.toggle('header__burger_open')
        nav.current.classList.toggle('header__nav_open')
    }

    return (
        <header className='header'>
            <Container>
                <a href='https://yakushgleb.github.io/movie-app/' className='header__main'>
                    <Button>
                        {icon && <img className='header__icon' src={icon} alt='logo' />}
                        {title && <span className='header__title'>{title}</span>}
                    </Button>
                </a>
                <nav className='header__nav' ref={nav}>
                    <Button>My List</Button>
                    <Button>Search</Button>
                </nav>
                <span className='header__burger' onClick={openMenu} />
            </Container>
        </header>
    )
}

export default Header