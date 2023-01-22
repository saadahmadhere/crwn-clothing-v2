// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ItemCount, CartIconContainer, ShoppingIcon } from './cart-icon.styles';
import { useCartContext } from '../../contexts/cart.context';

const CartIcon = () => {
	const { cartCount } = useCartContext();
	return (
		<CartIconContainer>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
