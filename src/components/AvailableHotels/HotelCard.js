import React from 'react';

import classes from './AvailableHotels.module.css';

const HotelCard = ({ name, city, country, imageUrl }) => (
	<figure className={classes.figure}>
		<img className={classes.pic} src={imageUrl} alt={name} />
		<figcaption className={classes.name}>
			{name} <br />
			<span className={classes.location}>
				{city}, {country}
			</span>
		</figcaption>
	</figure>
);

export default HotelCard;
