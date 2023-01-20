import { useCategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
	const { categoryMap } = useCategoriesContext();
	return (
		<>
			{Object.keys(categoryMap).map((title) => {
				return (
					<div key={title}>
						<h2>{title}</h2>
						<div className='products-container'>
							{categoryMap[title].map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Shop;
