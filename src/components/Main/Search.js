import React, { useState } from 'react';

import { getHotels } from '../../services/hotels';

import classes from './Search.module.css';

const Search = ({ onSearchResult }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = async event => {
		event.preventDefault();
		await getHotels({ searchQuery, onSearchResult });
	};

	return (
		<form className={classes.bar}>
			<input
				type={'text'}
				value={searchQuery}
				onChange={event => setSearchQuery(event.target.value)}
				className={classes.search + ' ' + classes.element}
			/>
			<input type={'date'} className={classes.date + ' ' + classes.element} />
			<select className={classes.persons + ' ' + classes.element}>
				<option value='111'>111</option>
			</select>
			<button onClick={handleSearch} className={classes.btn}>
				Search
			</button>
		</form>
	);
};

export default Search;
