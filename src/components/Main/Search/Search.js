import React, { useContext, useState } from 'react';

import { useHotelSearch } from '../../../hooks/useHotelSearch';

import Calendar from '../Calendar/Calendar';

import classes from './Search.module.css';

import CalendarContext from '../../../contexts/Calendar.context';
import SearchContext from '../../../contexts/Search.context';

const Search = () => {
	const { setCalendarShow, checkIn, checkOut } = useContext(CalendarContext);
	const { setShow } = useContext(SearchContext);
	const [searchQuery, setSearchQuery] = useState('');
	const { fetchData } = useHotelSearch(searchQuery);

	const currentYear = new Date().getFullYear();

	const getDayMs = date => {
		const dayMs = new Date(currentYear, new Date().getMonth(), date).setHours(
			0,
			0,
			0,
			0
		);
		return dayMs;
	};

	const checkInMs = getDayMs(checkIn);
	const checkOutMs = getDayMs(checkOut);

	const formateDate = dateMs => {
		let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		let months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Okt',
			'Nov',
			'Dec'
		];

		let date = new Date(dateMs);
		let dayOfWeek = days[date.getDay()];
		let day = date.getDate();
		let month = months[date.getMonth()];

		return `${dayOfWeek} ${day} ${month}`;
	};

	const handleExpand = event => {
		event.preventDefault();
		setCalendarShow(prevState => !prevState);
	};

	const handleInputChange = event => {
		event.preventDefault();
		setSearchQuery(event.target.value);
	};

	const handleSearch = async event => {
		event.preventDefault();
		setShow(true);
		fetchData(searchQuery);
	};

	return (
		<>
			<form className={classes.bar}>
				<input
					type={'text'}
					value={searchQuery}
					onChange={handleInputChange}
					className={`${classes.search} ${classes.element}`}
				/>
				<div className={classes['date-div']}>
					<button
						onClick={handleExpand}
						className={`${classes.date} ${classes.element}`}
					>
						{checkIn != undefined ? formateDate(checkInMs) : 'Check-In'} —
						{'\u00A0'}
						{checkOut != undefined ? formateDate(checkOutMs) : 'Check-Out'}
					</button>
					<Calendar />
				</div>

				<select className={`${classes.persons} ${classes.element}`}>
					<option value='111'>111</option>
				</select>
				<button onClick={handleSearch} className={classes.btn}>
					Search
				</button>
			</form>
		</>
	);
};

export default Search;
