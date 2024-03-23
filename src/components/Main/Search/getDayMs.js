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

export default getDayMs;
