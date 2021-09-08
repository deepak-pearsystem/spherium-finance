import { API_ROOT } from '../apiConfig';
import axios from 'axios';

export const Blog = () => {
	return axios.get(`${API_ROOT}/media`)
		.then(response => response)
}