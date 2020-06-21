import { SET_TITLE, SET_TYPE, SET_PAGE, SET_LIST, ADD_LIST } from './actionTypes'

const initialState = {
    options: {
        title: '',
        type: 'movie',
        page: 1,
    },
    data: {
        list: null

    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                options: {
                    ...state.options,
                    title: action.title
                }
            }

        case SET_TYPE:
            return {
                ...state,
                options: {
                    ...state.options,
                    type: action.searchType
                }
            }


        case SET_PAGE:
            return {
                ...state,
                options: {
                    ...state.options,
                    page: action.page
                }
            }

        case SET_LIST:
            return {
                ...state,
                data: {
                    ...state.data,
                    list: action.list
                }
            }

        case ADD_LIST:
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