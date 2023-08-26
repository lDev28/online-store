import React from 'react'
// import styles from './styles/productCart.module.scss'

const ProductCart = ({ product, children }) => {
	return (
		<div>
			<h3>{product.name}</h3>
			<p>Категория: {product.category}</p>
			<p>Цена: {product.price}</p> {children}
		</div>
	)
}

export default ProductCart
// className={styles.ProductCart}
