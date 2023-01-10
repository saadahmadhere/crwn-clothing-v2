import { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CartContextProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(count, item) => count + item.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);
		setCartTotal(newCartTotal);
	}, [cartItems]);

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

	const clearItemFromCart = (product) => {
		const itemToBeRemoved = cartItems.find(
			(cartItem) => cartItem.id === product.id
		);

		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.id !== itemToBeRemoved.id
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
		cartTotal,
		clearItemFromCart,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
