import React from 'react';

import { Sprite } from '../../assets/Sprite';
import HomesGuestsLoves from '../HomesGuestsLoves/HomesGuestsLoves';
import Main from '../Main/Main';

import './App.css';

import { SearchContextProvider } from '../../contexts/Search.context';
import AvailableHotels from '../AvailableHotels/AvailableHotels';

function App() {
	return (
		<SearchContextProvider>
			<Sprite />
			<Main />
			<AvailableHotels />
			<HomesGuestsLoves />
		</SearchContextProvider>
	);
}

export default App;
