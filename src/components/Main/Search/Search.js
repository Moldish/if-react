import React, { useContext, useState } from 'react';

import { useHotelSearch } from '../../hooks/useHotelSearch';

import classes from './Search.module.css';

import SearchContext from './Search.context';

const Search = () => {
	const { setShow } = useContext(SearchContext);
	const [searchQuery, setSearchQuery] = useState('');
	const { fetchData } = useHotelSearch(searchQuery);

	const handleInputChange = event => {
		event.preventDefault();
		setSearchQuery(event.target.value);
	};

	const handleClick = async event => {
		event.preventDefault();
		setShow(true);
		fetchData(searchQuery);
	};

	return (
		<form className={classes.bar}>
			<input
				type={'text'}
				value={searchQuery}
				onChange={handleInputChange}
				className={classes.search + ' ' + classes.element}
			/>
			<input type={'date'} className={classes.date + ' ' + classes.element} />
			<select className={classes.persons + ' ' + classes.element}>
				<option value='111'>111</option>
			</select>
			<button onClick={handleClick} className={classes.btn}>
				Search
			</button>
		</form>
	);
};

export default Search;
