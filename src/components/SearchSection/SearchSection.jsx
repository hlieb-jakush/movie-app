import React, { useState, useEffect } from 'react'
import Container from '../Container/Container';
import Button from '../Button/Button'
import Input from '../Input/Input'
import './SearchSection.scss'

const SearchSection = ({ title, type, list, setTitle, setType, setPage, getList }) => {

    const [localTitle, setlLocalTitle] = useState(title)
    const [localType, setlLocalType] = useState(type)

    const onSetlLocalType = (e) => {
        setlLocalType(e.target.value)
    }

    const onSetOptions = () => {
        setTitle(localTitle)
        setType(localType)
        setPage(1)
    }

    useEffect(() => {
        if (title) getList(title, type)
    }, [title, type, getList]);

    return (
        <section className='search'>
            <Container>
                <div className={`search__block ${!list ? 'search__block_middle' : ''}`}>
                    <Input title={localTitle} type='search' onChange={setlLocalTitle} />
                    <select className='select' defaultValue={localType} onChange={onSetlLocalType}>
                        <option value='movie'>Movie</option>
                        <option value='series'>Series</option>
                    </select>
                    <Button onClick={onSetOptions}>Search</Button>
                </div>
            </Container>
        </section>
    )
}

export default SearchSection