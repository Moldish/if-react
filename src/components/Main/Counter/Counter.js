import React, { useState } from 'react';
import CounterElement from './CounterElement';
import SelectElement from './SelectElement';

import classes from './Counter.module.css';

const Counter = ({ show, onDataCounter }) => {
	const [count, setCount] = useState('');

	const updateCount = value => {
		setCount(value);
	};
	return (
		<div
			className={!show ? `${classes.counter} ${classes.hide}` : classes.counter}
		>
			<CounterElement
				onDataCounter={onDataCounter}
				name={'Adults'}
				min={1}
				max={30}
			/>
			<CounterElement
				onDataCounter={onDataCounter}
				name={'Children'}
				updateCount={updateCount}
				min={0}
				max={10}
				child={true}
			/>
			<CounterElement
				onDataCounter={onDataCounter}
				name={'Rooms'}
				min={1}
				max={30}
			/>
			{count > 0 ? (
				<div className={classes.child}>
					<span>What is the age of the child you’re traveling with?</span>
					{[...Array(count)].map((_, key) => (
						<SelectElement key={key} />
					))}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Counter;
