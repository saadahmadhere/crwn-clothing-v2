import { useState, useEffect, createContext, useContext } from 'react';
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// as the actual value we want to access
const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
	return useContext(UserContext);
};
