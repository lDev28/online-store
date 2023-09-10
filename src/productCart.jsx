import React from 'react'
import styles from './products.module.scss'

const ProductCart = ({ product, children }) => {
	return (
		<div className={styles.Product__cart}>
			<h3>{product.name}</h3>
			<p>Категория: {product.category}</p>
			<p>Цена: {product.price}</p> {children}
		</div>
	)
}

export default ProductCart
