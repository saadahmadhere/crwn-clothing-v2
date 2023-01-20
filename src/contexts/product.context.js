import { createContext, useContext, useState, useEffect } from 'react';
import {
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data';

const ProductContext = createContext({
	products: [],
	setProducts: () => null,
});

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA);
	}, []);

	useEffect(() => {
		(async () => {
			const getCatergoriesMap = await getCategoriesAndDocuments();
			console.log(getCatergoriesMap);
		})();
	}, []);

	const value = { products, setProducts };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};

export const useProductContext = () => useContext(ProductContext);
