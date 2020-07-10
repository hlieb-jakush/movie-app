import Axios from "axios"

const key = 'dfdae3d4'

const instance = Axios.create({
    baseURL: `https://www.omdbapi.com/`
})

const storage = window.localStorage

export const API = {
    getResultList(title, type, page) {
        return instance.get(`?apikey=${key}&s=${title}&type=${type}&page=${page}`)
            .then(response => response.data)
    },

    setLocalData(type, list) {
        return new Promise(function (resolve, reject) {
            storage.setItem(type, JSON.stringify(list))
            resolve(list)
        })
    },

    getLocalData(type) {
        return new Promise(function (resolve, reject) {
            resolve(JSON.parse(storage.getItem(type)))
        })
    }
}