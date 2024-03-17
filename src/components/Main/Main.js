import React, { useState, useRef } from 'react';

import Header from './Header/Header';
import Search from './Search';
import AvailableHotels from '../AvailableHotels/AvailableHotels';

import classes from './Main.module.css';
export default function Main() {
	const ref = useRef(null);
	const [searchResults, setSearchResults] = useState([]);
	const [showAvailable, setShowAvailable] = useState(false);

	const handleSearch = result => {
		setSearchResults(result);
		setShowAvailable(true);
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<section className={classes.main}>
				<div className={'container'}>
					<Header />
					<h1 className={classes.motto}>
						Discover stays
						<br /> to live, work or just relax
					</h1>
					<Search onSearchResult={handleSearch} />
				</div>
			</section>
			<div ref={ref}>
				{showAvailable && <AvailableHotels searchResults={searchResults} />}
			</div>
		</>
	);
}
