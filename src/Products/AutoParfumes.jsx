import React from 'react'
import AUTO_PARFUMES from '../data/categories/auto_parfumes/AUTO_PARFUMES.JS'
import ProductCart from '../productCart'

const AutoParfumes = () => {
	return (
		<div>
			{AUTO_PARFUMES.map((product) => (
				<ProductCart key={product.id} product={product} />
			))}
		</div>
	)
}

export default AutoParfumes
