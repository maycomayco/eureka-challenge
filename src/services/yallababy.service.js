/* eslint-disable consistent-return */
const secretKey = '1DIPIkKeq8';
const apiUrl = 'https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory';

// I transform all the information into what I really need
const transformResponse = (data) => data.map((p) => {
  const variants = p.variants.map((v) => ({
    variantId: v.id,
    price: v.price,
    title: v.title,
    diapersName: v.option2,
  }));

  return {
    id: p.id,
    title: p.title,
    productType: p.product_type,
    imageSrc: p.image.src,
    imageAlt: p.image.alt,
    quantitySold: p.quantitySold,
    variants,
  };
});

// filter products with a filter array
const filterProducts = (filters, products) => (
  products.filter((product) => filters.includes(product.productType))
);

// order products
const orderProducts = (products, orderBy) => {
  if (orderBy === 'alphabetical') {
    return products.sort((p1, p2) => ((p1.title > p2.title) ? 1 : -1));
  }
};

const getProductsBySubcategory = async (filters, orderBy) => {
  try {
    const resp = await fetch(apiUrl, {
      headers: {
        secretKey,
      },
    });

    const data = await resp.json();

    const products = transformResponse(data);

    // I use this like an option to from the API to filter
    if (filters.length) {
      return filterProducts(filters, products);
    }

    if (orderBy) {
      return orderProducts(products, orderBy);
    }

    // if we don't has filters or sort activated, default return
    return products;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default getProductsBySubcategory;
