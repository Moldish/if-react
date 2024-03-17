const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function month() {
	currentDate.setDate(1);
	const monthName = currentDate.toLocaleString('en-En', { month: 'long' });
	let day = currentDate.getDay();
	const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const daysInWeek = 7;
	const prevMonthDays = monthDays[new Date().getMonth() - 1];
	const currentMonthDays = monthDays[new Date().getMonth()];
	const monthArr = [];
	const monthInfo = {
		monthName: monthName,
		monthArr: monthArr,
		currentYear: currentYear
	};
	//
	if (day >= 1 && day <= daysInWeek) {
		const weekArr = [];
		let prevMonth = prevMonthDays - day + 2;
		while (prevMonth <= prevMonthDays) {
			const currentDayCheck = day === new Date().getDate();
			const dayMs = new Date(
				currentYear,
				new Date().getMonth() - 1,
				prevMonth
			).setHours(0, 0, 0, 0);
			const dayInfo = {
				dayOfMonth: prevMonth,
				notCurrentMonth: true,
				currentDay: currentDayCheck,
				dayMs: dayMs
			};
			prevMonth += 1;
			weekArr.push(dayInfo);
			day = 1;
		}
		if (weekArr.length < daysInWeek) {
			while (weekArr.length < daysInWeek && day <= currentMonthDays) {
				const currentDayCheck = day === new Date().getDate();
				const dayMs = new Date(
					currentYear,
					new Date().getMonth(),
					day
				).setHours(0, 0, 0, 0);
				const dayInfo = {
					dayOfMonth: day,
					notCurrentMonth: false,
					currentDay: currentDayCheck,
					dayMs: dayMs
				};
				weekArr.push(dayInfo);
				day += 1;
			}
		}
		monthArr.push(weekArr);
	}
	while (day < currentMonthDays) {
		monthArr.push(week(day, currentMonthDays, daysInWeek));
		day += daysInWeek;
	}
	return monthInfo;
}

function week(day, currentMonthDays) {
	const daysInWeek = 7;
	const weekArr = [];
	let nextMonth = 1;
	while (weekArr.length < daysInWeek) {
		if (weekArr.length < daysInWeek && day <= currentMonthDays) {
			const currentDayCheck = day === new Date().getDate();
			const dayMs = new Date(currentYear, new Date().getMonth(), day).setHours(
				0,
				0,
				0,
				0
			);
			const dayInfo = {
				dayOfMonth: day,
				notCurrentMonth: false,
				currentDay: currentDayCheck,
				dayMs: dayMs
			};
			day += 1;
			weekArr.push(dayInfo);
		} else {
			const currentDayCheck = day === new Date().getDate();
			const dayMs = new Date(currentYear, new Date().getMonth(), day).setHours(
				0,
				0,
				0,
				0
			);
			const dayInfo = {
				dayOfMonth: nextMonth,
				notCurrentMonth: true,
				currentDay: currentDayCheck,
				dayMs: dayMs
			};
			nextMonth += 1;
			weekArr.push(dayInfo);
		}
	}
	return weekArr;
}
