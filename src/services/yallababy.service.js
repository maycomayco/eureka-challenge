const secretKey = '1DIPIkKeq8';

export const getProductsBySubcategory = async (filters) => {
	const url = `https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory`;

	try {
		const resp = await fetch(url, {
			headers: {
				'secretKey': secretKey
			}
		});

		const data = await resp.json();

		let products = transformResponse(data)

		// I use this like an option to from the API to filter
		if (filters.length) {
			return filterProducts(filters, products);
		}

		// if we don't has filters or sort activated, default return
		return products;

	} catch (error) {
		console.log(error);
	}
};

// filter products with a filter array
const filterProducts = (filters, products) => {
	return products.filter( product => filters.includes(product.productType))
}

// I transform all the information into what I really need
const transformResponse = data => {
	return data.map( p => {
		const variants = p.variants.map( v => {
			return {
				variantId: v.id,
				price: v.price
			}
		})

		return {
			id: p.id,
			title: p.title,
			productType: p.product_type,
			imageSrc: p.image.src,
			imageAlt: p.image.alt,
			quantitySold: p.quantitySold,
			variants: variants
		}
	});
}
