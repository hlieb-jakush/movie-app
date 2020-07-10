import {
    SET_SEARCH_TITLE, SET_SEARCH_TYPE, SET_SEARCH_PAGE,
    SET_RESULT_LIST, ADD_RESULT_LIST,
    SET_PROFILE_NAME,
    SET_FAVORITE_LIST, ADD_FAVORITE_ITEM, DELETE_FAVORITE_ITEM,
    SET_HISTORY_LIST, ADD_HISTORY_ITEM
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

        case SET_FAVORITE_LIST:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    favorite: action.favorite
                }
            }

        case ADD_FAVORITE_ITEM:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    favorite: [...state.profile.favorite, action.favorite]
                }
            }

        case DELETE_FAVORITE_ITEM:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    favorite: [...state.profile.favorite.filter(item => item.imdbID !== action.imdbID)]
                }
            }

        case SET_HISTORY_LIST:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    history: action.history
                }
            }

        case ADD_HISTORY_ITEM:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    history: [...state.profile.history, action.history]
                }
            }

        default:
            return state
    }
}