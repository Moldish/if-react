import React from 'react';

import { useInView } from 'react-intersection-observer';

import classes from './Title.module.css';

const Title = ({ children }) => {
	const { ref, inView } = useInView({
		delay: '250'
	});

	return (
		<>
			<h2 className={classes.title}>{children}</h2>
			<div
				ref={ref}
				className={`${classes.underline} ${inView ? classes.visible : ''}`}
			></div>
		</>
	);
};

export default Title;
