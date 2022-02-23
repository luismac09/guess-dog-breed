import axios from 'axios'
import config from './config'
const key = config.KEY_VALUE
const name = config.KEY_NAME
const url = config.API_URL

const dogApi = axios.create({
   baseURL: url,
   headers: {
      name: key,
   },
})

export default dogApi
