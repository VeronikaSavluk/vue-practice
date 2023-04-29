import axios from 'axios';

const api = axios.create({
	baseURL: 'https://apt-booking-api.herokuapp.com/',
});

export default api;