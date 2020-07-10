import React, { useState } from 'react'
import Container from '../Container/Container';
import Button from '../Button/Button'
import Input from '../Input/Input'
import './SearchSection.scss'

const SearchSection = ({ title, type, list, setResultListThunk }) => {

    const [localTitle, setLocalTitle] = useState(title)
    const [localType, setLocalType] = useState(type)

    const onGetList = () => {
        if (localTitle !== title || localType !== type) {
            setResultListThunk(localTitle, localType)
        }
    }

    return (
        <section className='search'>
            <Container>
                <div className={`search__block ${!list ? 'search__block_middle' : ''}`}>
                    <Input value={localTitle} type='search' onChange={e => setLocalTitle(e.target.value)} />
                    <select className='select' defaultValue={localType} onChange={e => setLocalType(e.target.value)}>
                        <option value='movie'>Movie</option>
                        <option value='series'>Series</option>
                    </select>
                    <Button onClick={onGetList}>Search</Button>
                </div>
            </Container>
        </section >
    )
}

export default SearchSection