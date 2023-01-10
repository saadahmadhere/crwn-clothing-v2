import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useCartContext } from '../../contexts/cart.context';

const CartIcon = () => {
	const { cartCount } = useCartContext();
	return (
		<div className='cart-icon-container'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
