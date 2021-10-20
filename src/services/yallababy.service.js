const secretKey = '1DIPIkKeq8';

export const getItems = async () => {
	// const query = encodeURI(category);
	const url = `https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory`;

	// revisar doc de fetch
	const resp = await fetch(url, {
		headers: {
			'secretKey': secretKey
		}
	});
	const data = await resp.json(); //obtengo solo la property que necesito

	// console.log(data);
	// esto deberia ser un transform, de lo que me devuelve la API original y lo que realmente necesita mi App
	// const gifs = data.map( img => {
	// 	return {
	// 		id: img.id,
	// 		title: img.title,
	// 		url: img.images?.fixed_height_small.url, //con (?) decimos que si vienen images entonces lo utilizamos
	// 	};
	// });

	return data;
};
