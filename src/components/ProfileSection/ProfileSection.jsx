import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Container from '../Container/Container'
import Button from '../Button/Button'
import Input from '../Input/Input'
import ProfileListItem from '../ProfileListItem/ProfileListItem'
import avatar from '../../assets/icons/face.svg'
import settingsIcon from '../../assets/icons/settings_white.svg'
import historyIcon from '../../assets/icons/history.svg'
import listIcon from '../../assets/icons/list.svg'
import './ProfileSection.scss'

const ProfileSection = ({ name, history, favorite, setProfileNameThunk, clearHistoryListThunk, clearFavoriteListThunk, setResultListThunk, deleteFavoriteItem }) => {

    const settingsModal = useRef(null)
    const historyModal = useRef(null)
    const listModal = useRef(null)
    const [inputValue, setInputValue] = useState(name)

    let historyHook = useHistory()

    useEffect(() => {
        setInputValue(name)
    }, [name])

    const onSearch = (title, type, page, setHistory) => {
        setResultListThunk(title, type, page, setHistory)
        historyHook.push('/')
    }

    const toggleModal = (e) => {
        if (e.target.classList.contains('settings') || e.target.closest('#settings-button')) settingsModal.current.classList.toggle('modal_open')
        if (e.target.classList.contains('history') || e.target.closest('#history-button')) historyModal.current.classList.toggle('modal_open')
        if (e.target.classList.contains('list') || e.target.closest('#list-button')) listModal.current.classList.toggle('modal_open')
        if (e.target.closest('#settings-button-close')) settingsModal.current.classList.remove('modal_open')
        if (e.target.closest('#history-button-close')) historyModal.current.classList.remove('modal_open')
        if (e.target.closest('#list-button-close')) listModal.current.classList.remove('modal_open')
    }

    return (
        <section className='profile'>
            <Container>
                <div className='profile__block'>
                    <div className='userinfo'>
                        <img alt='avatar' src={avatar} className='userinfo__avatar' />
                        <h1 className='userinfo__username'>{name}</h1>
                        <Button className='button_medium' id='settings-button' onClick={toggleModal}>
                            <img src={settingsIcon} alt='icon' />
                            <span>Settings</span>
                        </Button>
                        <Button className='button_medium' id='history-button' onClick={toggleModal}>
                            <img src={historyIcon} alt='icon' />
                            <span>History</span>
                        </Button>
                        <Button className='button_medium' id='list-button' onClick={toggleModal}>
                            <img src={listIcon} alt='icon' />
                            <span>My list</span>
                        </Button>
                    </div>
                    <div className='modal settings' ref={settingsModal} onClick={toggleModal}>
                        <div className='modal__content'>
                            <span className='modal__info'>
                                Username:
                            </span>
                            <div className='modal__panel'>
                                <Input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                                <Button className='button_outlined' onClick={e => setProfileNameThunk(inputValue)}>Save</Button>
                            </div>
                            <div className='modal__panel'>
                                <Button className='button_outlined' onClick={e => clearHistoryListThunk()}>Clear history</Button>
                                <Button className='button_outlined' onClick={e => clearFavoriteListThunk()}>Clear list</Button>
                            </div>
                            <div className='modal__panel'>
                                <Button id='settings-button-close' onClick={toggleModal}>Okay</Button>
                            </div>
                        </div>
                    </div>
                    <div className='modal history' ref={historyModal} onClick={toggleModal}>
                        <div className='modal__content'>
                            <span className='modal__info'>
                                Your history:
                            </span>
                            <ul className='modal__list'>
                                {history && history.length ? history.map((item, index) => <ProfileListItem key={`${item.title}(${index})`} title={item.title} type={item.type} onSearch={onSearch} isHistory />) : 'Your history is empty'}
                            </ul>
                            <div className='modal__panel'>
                                <Button id='history-button-close' onClick={toggleModal}>Okay</Button>
                            </div>
                        </div>
                    </div>
                    <div className='modal list' ref={listModal} onClick={toggleModal}>
                        <div className='modal__content'>
                            <span className='modal__info'>
                                Your list:
                            </span>
                            <ul className='modal__list'>
                                {favorite && favorite.length ? favorite.map((item, index) => <ProfileListItem key={`${item.title}(${index})`} title={item.title} poster={item.poster} imdbID={item.imdbID} onDelete={deleteFavoriteItem} isFavorite />) : 'Your list is empty'}
                            </ul>
                            <div className='modal__panel'>
                                <Button id='list-button-close' onClick={toggleModal}>Okay</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProfileSection