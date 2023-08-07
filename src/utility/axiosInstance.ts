import axios, {AxiosInstance} from 'axios'
const springAxiosInst: AxiosInstance = axios.create({
    baseURL: 'http://localhost:7777'
})
const fastApiAxiosInst: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

export default { springAxiosInst, fastApiAxiosInst }