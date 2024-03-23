// import axios from 'axios';
// import { hotelsUrl } from '../constants';
// import { useContext, useEffect } from 'react';
// import SearchContext from '../../components/Main/Search.context';
//
// const [query, setData] = useContext(SearchContext);
//
// export const getHotels = async ({query}) => {
// 	useEffect(() => {
// 		axios
// 			.get(hotelsUrl, {
// 				params: {
// 					search: query
// 				}
// 			})
// 			.then(response => {
// 				setData(response.data);
// 				console.log(response.data);
// 			})
// 			.catch(error => console.log(error));
// 	}, [query, setData]);
// };
