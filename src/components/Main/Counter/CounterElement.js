import React, { useState } from 'react';

import classes from './Counter.module.css';

const CounterElement = ({
	name,
	min,
	max,
	updateCount,
	child,
	onDataCounter
}) => {
	const [count, setCount] = useState(min);

	const increment = event => {
		event.preventDefault();
		if (count < max) {
			setCount(prevState => prevState + 1);
			onDataCounter(name, count + 1);
			if (child) {
				updateCount(count + 1);
			}
		}
	};

	const decrement = event => {
		event.preventDefault();
		if (count > min) {
			setCount(prevState => prevState - 1);
			onDataCounter(name, count - 1);
			if (child) {
				updateCount(count - 1);
			}
		}
	};
	return (
		<div className={classes.element}>
			<span className={classes.name}>{name}</span>
			<button
				className={
					count > min ? classes.button : `${classes.button} ${classes.disable}`
				}
				onClick={decrement}
			>
				-
			</button>
			<span className={classes.count}>{count}</span>
			<button
				className={
					count < max ? classes.button : `${classes.button} ${classes.disable}`
				}
				onClick={increment}
			>
				+
			</button>
		</div>
	);
};

export default CounterElement;
