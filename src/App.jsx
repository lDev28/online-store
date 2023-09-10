import React, { useState } from 'react'
import PRODUCTS from './data/Products'
import ProductCart from './productCart'
import styles from './products.module.scss'
import AutoParfumes from './Products/AutoParfumes'

const App = () => {
	// Массив данных товаров

	const product = {
		name: '',
		description: '',
		price: 0,
		brand: '',
		category: ''
	}
	const [products, setProducts] = useState(PRODUCTS)

	// Состояние корзины
	const [cart, setCart] = useState([])

	// Функция для добавления товара в корзину
	const addToCart = (product) => {
		setCart([...cart, product])
	}

	return (
		<div>
			<h1>Интернет-магазин</h1>

			<h2>Товары</h2>
			<div className={styles.Products}>
				{products.map((product) => (
					<ProductCart key={product.id} product={product}>
						<button onClick={() => addToCart(product)}>
							Добавить в корзину
						</button>
					</ProductCart>
				))}
			</div>

			<AutoParfumes />

			<h2>Корзина</h2>
			{cart.map((product) => (
				<ProductCart key={product.id} product={product} />
			))}
		</div>
	)
}

export default App
