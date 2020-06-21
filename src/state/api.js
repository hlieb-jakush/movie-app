import Axios from "axios"

const key = 'dfdae3d4'

const instance = Axios.create({
    baseURL: `http://www.omdbapi.com/`
})

export const API = {
    getList(title, type, page) {
        return instance.get(`?apikey=${key}&s=${title}&type=${type}&page=${page}`).then(response => response.data)
    }
}
