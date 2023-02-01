import { useNavigate } from 'react-router-dom';

import {
	CategoryContainer,
	CategoryBody,
	BackgroundImage,
} from './category-item.styles.jsx';

const CategoryItem = ({ category }) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();
	const handleOnNavigate = () => navigate(route);
	return (
		<CategoryContainer onClick={handleOnNavigate}>
			<BackgroundImage imageUrl={imageUrl} />
			<CategoryBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</CategoryBody>
		</CategoryContainer>
	);
};

export default CategoryItem;
