import axios from 'axios';
import { useContext } from 'react';
import SearchContext from '../contexts/Search.context';
import { hotelsUrl } from '../services/constants';

export const useHotelSearch = () => {
	const { setData } = useContext(SearchContext);
	const fetchData = searchQuery => {
		axios
			.get(hotelsUrl, {
				params: {
					search: searchQuery
				}
			})
			.then(response => {
				let fetchedData = response.data;
				setData(fetchedData);
			})
			.catch(error => console.log(error));
	};
	return { fetchData };
};
