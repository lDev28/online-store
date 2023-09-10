import React from 'react'
import styles from './products.module.scss'
// import styles from './styles/productCart.module.scss'
import AUTO_PARFUMES from './data/categories/auto_parfumes/AUTO_PARFUMES.JS'
import img from './data/categories/auto_parfumes/ocean.jpg'

const ProductCart = ({ product, children }) => {
	const img = require('./data/categories/auto_parfumes/ocean.jpg')
	return (
		<div className={styles.Product__cart}>
			<h3>{product.name}</h3>
			<img src={img} alt='img' />
			{/* <img src='./data/categories/auto_parfumes/ocean.jpg' alt='img' /> */}
			<p>Категория: {product.category}</p>
			<p>Цена: {product.price}</p> {children}
		</div>
	)
}

export default ProductCart
// className={styles.ProductCart}
