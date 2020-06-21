import { API } from "./api"
import { setList, addList as addListAC } from "./actionCreators"

export const getList = (title, type, page = 1) => (dispatch) => {
    API.getList(title, type, page).then(data => dispatch(setList(data.Search)))
}

export const addList = (title, type, page) => (dispatch) => {
    API.getList(title, type, page).then(data => {
        if (data.Response === 'False') {
            alert(data.Error)
            return
        }
        dispatch(addListAC(data.Search))
    }).catch(err => alert(err))
}