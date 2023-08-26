import React, { useState } from 'react'
import PRODUCTS from './Products'
import ProductCart from './productCart'

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
			{products.map((product) => (
				<ProductCart key={product.id} product={product}>
					<button onClick={() => addToCart(product)}>
						Добавить в корзину
					</button>
				</ProductCart>
			))}

			<h2>Корзина</h2>
			{cart.map((product) => (
				<ProductCart key={product.id} product={product} />
				// <div key={product.id}>
				// 	<h3>{product.name}</h3>
				// 	<p>Категория: {product.category}</p>
				// 	<p>Цена: {product.price}</p>
				// </div>
			))}
		</div>
	)
}

export default App
