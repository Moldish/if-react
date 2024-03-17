import React from 'react';
import Title from '../Title/Title';
import HotelCard from './HotelCard';
import Container from '../Container/Container';

const AvailableHotels = ({ searchResults }) => (
	<section>
		<Container>
			<Title>Available Hotels</Title>
			{searchResults.map(({ id, name, city, country, imageUrl }) => (
				<HotelCard
					key={id}
					name={name}
					city={city}
					country={country}
					imageUrl={imageUrl}
				/>
			))}
		</Container>
	</section>
);

export default AvailableHotels;
