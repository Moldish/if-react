import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Links.module.css';

export default function LinkElement({ children, path }) {
	return (
		<Link className={classes.link} to={path}>
			<span className={classes.link}>{children}</span>
		</Link>
	);
}
