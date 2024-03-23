import React, { useContext, useEffect, useRef, useState } from 'react';

import Container from '../Container/Container';
import Title from '../Title/Title';
import HotelCard from './HotelCard';

import classes from './AvailableHotels.module.css';

import SearchContext from '../../contexts/Search.context';

const AvailableHotels = () => {
	const [showAll, setShowAll] = useState(false);
	const ref = useRef(null);
	const { data, show } = useContext(SearchContext);
	const renderingData = showAll ? data : data.slice(0, 5);
	useEffect(() => {
		if (show !== false) {
			ref.current?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [show]);
	return (
		<section className={classes.available} ref={ref}>
			{show && (
				<Container>
					<Title>Available Hotels</Title>
					{renderingData.map(({ id, name, city, country, imageUrl }) => (
						<HotelCard
							key={id}
							name={name}
							city={city}
							country={country}
							imageUrl={imageUrl}
						/>
					))}
					{!showAll && (
						<button className={classes.expand} onClick={() => setShowAll(true)}>
							Show more
						</button>
					)}
				</Container>
			)}
		</section>
	);
};

export default AvailableHotels;
