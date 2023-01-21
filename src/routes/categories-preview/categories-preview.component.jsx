import { useCategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
	const { categoriesMap } = useCategoriesContext();
	return (
		<>
			<>
				{Object.keys(categoriesMap).map((key) => {
					const products = categoriesMap[key];
					return <CategoryPreview key={key} title={key} products={products} />;
				})}
			</>
		</>
	);
};

export default CategoriesPreview;
