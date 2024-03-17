import React, { createContext, useState } from 'react';

export const SearchContext = createContext({
	searchQuery: ''
});

export const SearchContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [show, setShow] = useState(false);
	return (
		<SearchContext.Provider value={{ data, setData, show, setShow }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
