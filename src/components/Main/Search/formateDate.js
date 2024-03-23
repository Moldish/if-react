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

export default formateDate;
