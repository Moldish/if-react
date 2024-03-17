import React from 'react';
import CalendarTable from './CalendarTable';
import month from './getCalendar';

const Calendar = () => {
	const monthArr = month().monthArr;
	const monthName = month().monthName;
	const currentYear = month().currentYear;
	return (
		<CalendarTable
			month={monthArr}
			monthName={monthName}
			currentYear={currentYear}
		/>
	);
};

export default Calendar;
