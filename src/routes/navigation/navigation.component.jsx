import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { useUserContext } from '../../contexts/user.context';
import { useCartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {
	NavigationContainer,
	LogoContainer,
	LinkContainer,
	LinksContainer,
} from './navigation.styles';

const Navigation = () => {
	const { currentUser } = useUserContext();
	const { isCartOpen, setIsCartOpen } = useCartContext();
	const handleSignOut = async () => {
		await signOutUser();
	};
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo />
				</LogoContainer>
				<LinksContainer>
					<LinkContainer to='/shop'>SHOP</LinkContainer>
					{currentUser ? (
						<LinkContainer as='span' onClick={handleSignOut}>
							SIGN OUT
						</LinkContainer>
					) : (
						<LinkContainer to='/auth'>SIGN IN</LinkContainer>
					)}
					<span onClick={() => setIsCartOpen((prev) => !prev)}>
						<CartIcon />
					</span>
				</LinksContainer>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
