import axios from 'axios'
import '../../config'
const key = config.MY_KEY
const name = config.NAME
const url = config.MY_URL

const dogApi = axios.create({
   baseURL: url,
   headers: {
      name: key,
   },
})

export default dogApi
