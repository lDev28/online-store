import React from 'react'
import styles from './products.module.scss'
import img from './data/categories/auto_parfumes/ocean.jpg'

const ProductCart = ({ product, children }) => {
	return (
		<div className={styles.Product__cart}>
			<h3>{product.name}</h3>
			<img src={img} alt='img' />
			<p>Категория: {product.category}</p>
			<p>Цена: {product.price}</p> {children}
		</div>
	)
}

export default ProductCart
