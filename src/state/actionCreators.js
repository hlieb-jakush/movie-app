import { SET_TITLE, SET_TYPE, SET_PAGE, SET_LIST, ADD_LIST } from './actionTypes'

export const setTitle = (title) => ({ type: SET_TITLE, title })
export const setType = (searchType) => ({ type: SET_TYPE, searchType })
export const setPage = (page) => ({ type: SET_PAGE, page })
export const setList = (list) => ({ type: SET_LIST, list })
export const addList = (list) => ({ type: ADD_LIST, list })