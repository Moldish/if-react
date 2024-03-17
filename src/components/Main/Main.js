import React from 'react';

import Header from './Header/Header';
import Search from './Search/Search';

import classes from './Main.module.css';

import { CalendarContextProvider } from '../../contexts/Calendar.context';
import Container from '../Container/Container';

export default function Main() {
	return (
		<CalendarContextProvider>
			<section className={classes.main}>
				<Container>
					<Header />
					<h1 className={classes.motto}>
						Discover stays
						<br /> to live, work or just relax
					</h1>
					<Search />
				</Container>
			</section>
		</CalendarContextProvider>
	);
}
