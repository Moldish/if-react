import React, { createContext, useState } from 'react';

export const SearchContext = createContext({
	searchQuery: ''
});

export const SearchContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [show, setAvailableShow] = useState(false);
	return (
		<SearchContext.Provider value={{ data, setData, show, setAvailableShow }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
