import React from 'react';

import LinkElement from './LinkElement';

import classes from './Links.module.css';

export default function Links() {
	return (
		<nav className={classes.nav}>
			<LinkElement path={'/'}>Stays</LinkElement>
			<LinkElement path={'/attractions'}>Attractions</LinkElement>
		</nav>
	);
}
