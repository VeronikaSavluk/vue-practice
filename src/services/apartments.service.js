import api from '../utils/api';

export const getAllApartments = () => {
	return api.get('/apartments');
};

export const getApartmentById = (id) => {
	return api.get(`/apartments/${id}`);
}