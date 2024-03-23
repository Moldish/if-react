import React from 'react';

import classes from './Counter.module.css';

import options from './counterOptions.json';

const SelectElement = () => {
	return (
		<select className={classes.select}>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{`${option.title} years old`}
				</option>
			))}
		</select>
	);
};

export default SelectElement;
