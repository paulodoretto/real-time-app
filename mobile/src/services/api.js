import axios from 'axios'

const URLAPI = 'http://10.0.3.2:3000'

const api = axios.create({
    baseURL: URLAPI
})

export default api