import React, { useContext, useState } from 'react';

import { useHotelSearch } from '../../../hooks/useHotelSearch';

import formateDate from './formateDate';
import getDayMs from './getDayMs';

import Calendar from '../Calendar/Calendar';

import classes from './Search.module.css';

import CalendarContext from '../../../contexts/Calendar.context';
import SearchContext from '../../../contexts/Search.context';
import Counter from '../Counter/Counter';

const Search = () => {
	const { setCalendarShow, checkIn, checkOut } = useContext(CalendarContext);
	const { setAvailableShow } = useContext(SearchContext);
	const [counterData, setCounterData] = useState({
		Adults: '1',
		Children: '0',
		Rooms: '1'
	});
	const [counterShow, setCounterShow] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const { fetchData } = useHotelSearch(searchQuery);

	const checkInMs = getDayMs(checkIn);
	const checkOutMs = getDayMs(checkOut);

	const handleInputChange = event => {
		event.preventDefault();
		setSearchQuery(event.target.value);
	};

	const handleCalendarExpand = event => {
		event.preventDefault();
		setCalendarShow(prevState => !prevState);
	};

	const handleCounterData = (name, counterData) => {
		setCounterData(prevState => ({
			...prevState,
			[name]: counterData
		}));
	};

	const handleCounterExpand = event => {
		event.preventDefault();
		setCounterShow(prevState => !prevState);
	};

	const handleSearch = async event => {
		event.preventDefault();
		setAvailableShow(true);
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
						onClick={handleCalendarExpand}
						className={`${classes.date} ${classes.element}`}
					>
						{checkIn != undefined ? formateDate(checkInMs) : 'Check-In'} —
						{'\u00A0'}
						{checkOut != undefined ? formateDate(checkOutMs) : 'Check-Out'}
					</button>
					<Calendar />
				</div>
				<div className={classes['counter-div']}>
					<button
						className={`${classes.persons} ${classes.element}`}
						onClick={handleCounterExpand}
					>
						Adults {counterData.Adults} — Children {counterData.Children} —
						Rooms {counterData.Rooms}
					</button>
					<Counter show={counterShow} onDataCounter={handleCounterData} />
				</div>
				<button onClick={handleSearch} className={classes.btn}>
					Search
				</button>
			</form>
		</>
	);
};

export default Search;
