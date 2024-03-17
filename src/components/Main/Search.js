import React, { useState } from 'react';

import classes from './Search.module.css';

import { data } from '../HomesGuestsLoves/homes-data';

const Search = ({ onSearchResult }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = event => {
		event.preventDefault();
		const searchValue = searchQuery.toLowerCase();
		const results = data.filter(item => {
			const valuesArr = Object.values(item).map(value => value.toLowerCase());
			return valuesArr.some(values => values.includes(searchValue));
		});
		onSearchResult(results);
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
