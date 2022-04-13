import axios from 'axios'
import CONFIG from './config'
const dogApi = axios.create({
	baseURL: CONFIG.apiurl,
	headers: {
		'x-api-key': CONFIG.apikey
	}
})

export default dogApi
