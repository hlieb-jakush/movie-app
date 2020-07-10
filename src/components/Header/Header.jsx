import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Container from '../Container/Container'
import './Header.scss'

const Header = ({ icon, title }) => {

    const nav = useRef(null)
    const burger = useRef(null)

    const toggleMenu = () => {
        burger.current.classList.toggle('header__burger_open')
        nav.current.classList.toggle('header__nav_open')
    }

    const closeleMenu = () => {
        burger.current.classList.remove('header__burger_open')
        nav.current.classList.remove('header__nav_open')
    }

    return (
        <header className='header'>
            <Container>
                <Link to='/' className='button button_large header__main' onClick={closeleMenu}>
                    <img src={icon} alt='logo' />
                    <span>{title}</span>
                </Link>
                <nav className='header__nav' ref={nav}>
                    <NavLink exact to='/' className='button' activeClassName='button_selected' onClick={closeleMenu}>
                        Search
                    </NavLink>
                    <NavLink to='/profile' className='button' activeClassName='button_selected' onClick={closeleMenu}>
                        Profile
                    </NavLink>
                </nav>
                <span className='header__burger' ref={burger} onClick={toggleMenu} />
            </Container>
        </header>
    )
}

export default Header