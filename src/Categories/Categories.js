import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './categories.css';
import classes from './categories.css';

const Categories = ({ categories }) => (
	<ul className="category-list">
		{categories.map(category => {
			return (
				<li key={category.id}>
					<Link className="category-option" to={`/products/${category.id}`}>
						{category.name}
					</Link>
				</li>
			);
		})}
	</ul>
);

Categories.propTypes = {
	categories: PropTypes.array.isRequired
};

export default Categories;
