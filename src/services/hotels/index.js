import axios from 'axios';
import { hotelsUrl } from '../constants';

export const getHotels = async ({ searchQuery, onSearchResult }) => {
	axios
		.get(hotelsUrl, {
			params: {
				search: searchQuery
			}
		})
		.then(response => onSearchResult(response.data))
		.catch(error => console.log(error));
};
