import { API_ROOT } from '../apiConfig';
import axios from 'axios';


export const contactFetchResult = (data) => {
	return axios.post(`${API_ROOT}/contact`,data)
		.then(response => response)
}