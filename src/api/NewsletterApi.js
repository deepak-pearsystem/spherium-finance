import { API_ROOT } from '../apiConfig';
import axios from 'axios';


export const newsletterResult = (data) => {
	return axios.post(`${API_ROOT}/newsletter`,data)
		.then(response => response)
}