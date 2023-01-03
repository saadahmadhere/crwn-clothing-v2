import { useState, createContext, useContext } from 'react';

// as the actual value we want to access
const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
	return useContext(UserContext);
};
