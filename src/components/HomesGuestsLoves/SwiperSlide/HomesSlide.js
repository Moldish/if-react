import React from 'react';

import classes from './HomesSlide.module.css';

const HomesSlide = ({ imageUrl, name, city, country }) => (
	<figure className={classes.figure}>
		<img className={classes.homeImg} src={imageUrl} alt={name} />
		<figcaption className={classes.name}>{name}</figcaption>
		<figcaption className={classes.place}>
			{city}, {country}
		</figcaption>
	</figure>
);

export default HomesSlide;
