import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dating-app-backend-mc8b.onrender.com"
})

export default instance