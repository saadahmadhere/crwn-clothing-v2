import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cartCount: 0,
});

export const CartContextProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	const addItemToCart = (productToAdd) => {
		const addedProduct = cartItems.find(
			(cartItem) => cartItem.id === productToAdd.id
		);

		if (addedProduct) {
			const newCartItems = cartItems.map((item) =>
				item.id === addedProduct.id
					? { ...item, quantity: (item.quantity += 1) }
					: item
			);
			return setCartItems(newCartItems);
		}

		return setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
	};

	const removeItemFromCart = (product) => {
		const itemToBeRemoved = cartItems.find(
			(cartItem) => cartItem.id === product.id
		);

		if (itemToBeRemoved.quantity === 1) {
			const newCartItems = cartItems.filter(
				(cartItem) => cartItem.id !== itemToBeRemoved.id
			);
			return setCartItems(newCartItems);
		}

		const newCartItems = cartItems.map((item) =>
			item.id === itemToBeRemoved.id
				? { ...item, quantity: (item.quantity -= 1) }
				: item
		);
		return setCartItems(newCartItems);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		removeItemFromCart,
		cartCount,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
