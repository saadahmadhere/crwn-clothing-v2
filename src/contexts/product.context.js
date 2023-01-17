import { createContext, useContext, useState } from 'react';
import SHOP_DATA from '../shop-data';

const ProductContext = createContext({
	products: [],
	setProducts: () => null,
});

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products, setProducts };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};

export const useProductContext = () => useContext(ProductContext);
