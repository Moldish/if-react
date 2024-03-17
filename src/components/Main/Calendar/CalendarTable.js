import React, { useContext, useState } from 'react';

import CalendarCell from './CalendarCell';

import CalendarContext from '../../../contexts/Calendar.context';
import classes from './Calendar.module.css';

const CalendarTable = ({ month, monthName, currentYear }) => {
	const { calendarShow, setCheckIn, setCheckOut } = useContext(CalendarContext);
	const [inRange, setInRange] = useState({});
	const [selected, setSelected] = useState({});
	const [firstDate, setFirstDate] = useState(null);
	const [secondDate, setSecondDate] = useState(null);

	const handleClick = date => {
		const range = [];
		if (firstDate && secondDate && date > new Date().getDate()) {
			setSelected({});
			setInRange({});
			setFirstDate(date);
			setCheckIn(date);
			setSecondDate(undefined);
			setCheckOut(undefined);
			setSelected(prevState => ({
				...prevState,
				[date]: !prevState[date]
			}));
		} else if (firstDate && !secondDate && date < firstDate) {
			setSecondDate(firstDate);
			setCheckOut(firstDate);
			setFirstDate(date);
			setCheckIn(date);
			for (let i = date + 1; i < firstDate; i++) {
				range.push(i);
			}
			range.forEach(day => {
				setInRange(prevState => ({
					...prevState,
					[day]: !prevState[day]
				}));
			});
			setSelected(prevState => ({
				...prevState,
				[date]: !prevState[date]
			}));
		} else if (date > new Date().getDate() && !firstDate) {
			setFirstDate(date);
			setCheckIn(date);
			for (let i = date + 1; i < firstDate; i++) {
				range.push(i);
			}
			range.forEach(day => {
				setInRange(prevState => ({
					...prevState,
					[day]: !prevState[day]
				}));
			});
			setSelected(prevState => ({
				...prevState,
				[date]: !prevState[date]
			}));
		} else if (date > new Date().getDate() && !secondDate) {
			setSecondDate(date);
			setCheckOut(date);
			for (let i = firstDate + 1; i < date; i++) {
				range.push(i);
			}
			range.forEach(day => {
				setInRange(prevState => ({
					...prevState,
					[day]: !prevState[day]
				}));
			});
			setSelected(prevState => ({
				...prevState,
				[date]: !prevState[date]
			}));
		}
	};

	const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	return (
		<table
			className={
				calendarShow ? classes.calendar : `${classes.calendar} ${classes.hide}`
			}
		>
			<thead>
				<tr>
					<th className={classes.month} colSpan={7}>
						{monthName}, {currentYear}
					</th>
				</tr>
				<tr>
					{weekDays.map(day => (
						<th className={classes.day} key={day}>
							{day}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{month.map((week, weekIndex) => (
					<tr key={weekIndex}>
						{week.map(date => (
							<CalendarCell
								key={date.dayOfMonth}
								onClick={() => handleClick(date.dayOfMonth)}
								current={date.currentDay}
								day={date.dayOfMonth}
								dayMs={date.dayMs}
								inactive={date.dayOfMonth < new Date().getDate()}
								notCurrentMonth={date.notCurrentMonth}
								selected={!!selected[date.dayOfMonth]}
								inRange={!!inRange[date.dayOfMonth]}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CalendarTable;
