const { default: axios } = require("axios");



const API = axios.create({
    baseURL: process.env.baseUrl,
    headers: {'K-secret': '123456'}
})

export default API