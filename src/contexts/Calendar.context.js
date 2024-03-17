import React, { createContext, useState } from 'react';

export const CalendarContext = createContext({
	searchQuery: ''
});

export const CalendarContextProvider = ({ children }) => {
	const [calendarShow, setCalendarShow] = useState(false);
	const [checkIn, setCheckIn] = useState(undefined);
	const [checkOut, setCheckOut] = useState(undefined);
	return (
		<CalendarContext.Provider
			value={{
				calendarShow,
				setCalendarShow,
				checkIn,
				setCheckIn,
				checkOut,
				setCheckOut
			}}
		>
			{children}
		</CalendarContext.Provider>
	);
};

export default CalendarContext;
