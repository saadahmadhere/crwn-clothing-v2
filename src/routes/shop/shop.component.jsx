import { useProductContext } from '../../contexts/product.context';

const Shop = () => {
	const { products } = useProductContext();
	return (
		<>
			{products.map(({ id, name }) => (
				<div key={id}>
					<h1>{name}</h1>
				</div>
			))}
		</>
	);
};

export default Shop;
