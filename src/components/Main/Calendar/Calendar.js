import React, { useMemo } from 'react';
import CalendarTable from './CalendarTable';
import month from './getCalendar';

const Calendar = () => {
	const memoizedMonth = useMemo(() => month(), []);

	const monthArr = memoizedMonth.monthArr;
	const monthName = memoizedMonth.monthName;
	const currentYear = memoizedMonth.currentYear;
	return (
		<CalendarTable
			month={monthArr}
			monthName={monthName}
			currentYear={currentYear}
		/>
	);
};

export default Calendar;
