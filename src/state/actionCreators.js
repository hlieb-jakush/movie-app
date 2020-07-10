import {
    SET_SEARCH_TITLE, SET_SEARCH_TYPE, SET_SEARCH_PAGE,
    SET_RESULT_LIST, ADD_RESULT_LIST,
    SET_PROFILE_NAME,
    SET_FAVORITE_LIST, ADD_FAVORITE_ITEM, DELETE_FAVORITE_ITEM,
    SET_HISTORY_LIST, ADD_HISTORY_ITEM
} from './actionTypes'

export const setSearchTitle = (title) => ({ type: SET_SEARCH_TITLE, title })
export const setSearchType = (category) => ({ type: SET_SEARCH_TYPE, category })
export const setSearchPage = (page) => ({ type: SET_SEARCH_PAGE, page })
export const setResultList = (list) => ({ type: SET_RESULT_LIST, list })
export const addResultList = (list) => ({ type: ADD_RESULT_LIST, list })
export const setProfileName = (name) => ({ type: SET_PROFILE_NAME, name })
export const setFavoriteList = (favorite) => ({ type: SET_FAVORITE_LIST, favorite })
export const addFavoriteItem = (favorite) => ({ type: ADD_FAVORITE_ITEM, favorite })
export const deleteFavoriteItem = (imdbID) => ({ type: DELETE_FAVORITE_ITEM, imdbID })
export const setHistoryList = (history) => ({ type: SET_HISTORY_LIST, history })
export const addHistoryItem = (history) => ({ type: ADD_HISTORY_ITEM, history })