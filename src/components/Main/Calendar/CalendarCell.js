import classNames from 'classnames/bind';
import React from 'react';

import classes from './Calendar.module.css';

const CalendarCell = ({
	day,
	dayMs,
	onClick,
	selected,
	inRange,
	inactive,
	notCurrentMonth,
	current
}) => {
	dayMs;
	const cx = classNames.bind(classes);
	const cellClasses = cx({
		day: true,
		selected: selected,
		'in-range': inRange,
		inactive: inactive,
		'not-current-month': notCurrentMonth,
		current: current
	});
	if (inactive | notCurrentMonth | current) {
		onClick = event => {
			event.preventDefault;
		};
	}
	return (
		<td className={cellClasses} onClick={onClick}>
			{day}
		</td>
	);
};

export default CalendarCell;
