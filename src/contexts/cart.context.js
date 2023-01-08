import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		const addedProduct = cartItems.find(
			(cartItem) => cartItem.id === productToAdd.id
		);

		if (addedProduct) {
			const newCartItems = cartItems.map((item) =>
				item.id === addedProduct.id
					? { ...item, quantity: item.quantity++ }
					: item
			);
			return setCartItems(newCartItems);
		}

		return setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
	};

	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
