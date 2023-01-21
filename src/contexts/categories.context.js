import { createContext, useContext, useState, useEffect } from 'react';
import {
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data';

const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategorierProvider = ({ children }) => {
	const [categoriesMap, setCategoryMap] = useState({});

	useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA);
	}, []);

	useEffect(() => {
		(async () => {
			const getCatergoriesMap = await getCategoriesAndDocuments();
			setCategoryMap(getCatergoriesMap);
		})();
	}, []);

	const value = { categoriesMap, setCategoryMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};

export const useCategoriesContext = () => useContext(CategoriesContext);
