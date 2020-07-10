import { API } from "./api"
import {
    setSearchTitle, setSearchType, setSearchPage,
    setResultList, addResultList,
    setProfileName,
    setFavoriteList,
    setHistoryList, addHistoryItem
} from "./actionCreators"

export const setResultListThunk = (title, type, page = 1, setHistory = true) => (dispatch) => {
    if (!title) return
    API.getResultList(title, type, page)
        .then(data => {
            if (data.Response === 'False') {
                alert(data.Error)
                return
            }
            dispatch(setSearchTitle(title))
            dispatch(setSearchType(type))
            dispatch(setSearchPage(page))
            dispatch(setResultList(data.Search))
            if (setHistory) {
                dispatch(addHistoryItem({ title, type }))
            }
        })
        .catch(err => alert('thunks error:', err))
}

export const addResultListThunk = (title, type, page) => (dispatch) => {
    API.getResultList(title, type, page)
        .then(data => {
            if (data.Response === 'False') {
                alert(data.Error)
                return
            }
            dispatch(addResultList(data.Search))
        })
        .catch(err => alert('thunks error:', err))
}

export const setProfileNameThunk = (name) => (dispatch) => {
    API.setLocalData('name', name)
        .then(data => dispatch(setProfileName(data)))
        .catch(err => alert('thunks error:', err))
}

export const getProfileNameThunk = () => (dispatch) => {
    API.getLocalData('name')
        .then(data => {
            if (!data) data = 'User'
            dispatch(setProfileName(data))
        })
        .catch(err => console.log('thunks error:', err))
}

export const setFavoriteListThunk = (list) => (dispatch) => {
    API.setLocalData('favorite', list)
        .catch(err => alert('thunks error:', err))
}

export const getFavoriteListThunk = () => (dispatch) => {
    API.getLocalData('favorite')
        .then(data => {
            if (data) dispatch(setFavoriteList(data))
        })
        .catch(err => alert('thunks error:', err))
}

export const clearFavoriteListThunk = () => (dispatch) => {
    API.setLocalData('favorite', '')
        .then(data => dispatch(setFavoriteList(data)))
        .catch(err => alert('thunks error:', err))
}

export const setHistoryListThunk = (history) => (dispatch) => {
    API.setLocalData('history', history)
        .catch(err => alert('thunks error:', err))
}

export const getHistoryListThunk = () => (dispatch) => {
    API.getLocalData('history')
        .then(data => {
            if (data) dispatch(setHistoryList(data))
        })
        .catch(err => alert('thunks error:', err))
}

export const clearHistoryListThunk = () => (dispatch) => {
    API.setLocalData('history', '')
        .then(data => dispatch(setHistoryList(data)))
        .catch(err => alert('thunks error:', err))
}