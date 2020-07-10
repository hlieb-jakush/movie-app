import {
    SET_SEARCH_TITLE, SET_SEARCH_TYPE, SET_SEARCH_PAGE,
    SET_RESULT_LIST, ADD_RESULT_LIST,
} from './actionTypes'

const initialState = {
    search: {
        title: '',
        type: 'movie',
        page: 1,
    },
    result: {
        list: null
    },
    profile: {
        name: 'User',
        favorite: [],
        history: []
    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TITLE:
            return {
                ...state,
                search: {
                    ...state.search,
                    title: action.title
                }
            }

        case SET_SEARCH_TYPE:
            return {
                ...state,
                search: {
                    ...state.search,
                    type: action.category
                }
            }


        case SET_SEARCH_PAGE:
            return {
                ...state,
                search: {
                    ...state.search,
                    page: action.page
                }
            }

        case SET_RESULT_LIST:
            return {
                ...state,
                result: {
                    ...state.result,
                    list: action.list
                }
            }

        case ADD_RESULT_LIST:
            return {
                ...state,
                result: {
                    ...state.result,
                    list: [...state.result.list, ...action.list]
                }
            }

        case SET_PROFILE_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: action.name
                }
            }

            return {
                ...state,
                data: {
                    ...state.data,
                    list: [...state.data.list, ...action.list]
                }
            }


        default:
            return state
    }
}