import axios from 'axios';
import { popularUrl } from '../constants';

export const getPopular = async () => {
	const { data: popular } = await axios.get(popularUrl);
	return popular;
};
