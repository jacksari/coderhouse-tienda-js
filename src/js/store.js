// Obtener productos del API
//https://course-api.com/javascript-store-products
const getProductsApi = async () => {
  try {
    const response = await fetch('https://course-api.com/javascript-store-products');
    return response.json();
  } catch (e) {
    // En caso falle que retorne un array en blanco []
    return [];
  }
}

// Obtener datos del producto por el id del producto del API
export const getProductByIdApi = async (id) => {
  try {
    const response = await fetch(`https://course-api.com/javascript-store-single-product?id=${id}`);
    return response.json();
  } catch (e) {
    // En caso falle que retorne nulo
    return null;
  }
}

export const products = async () => {
  // Retornar productos de API
  return await getProductsApi();
}

export const links = [
  {
    link: 'Home',
    url: 'index.html',
    active: false
  },
  {
    link: 'Products',
    url: 'products.html',
    active: false
  },
  {
    link: 'Single Product',
    url: 'single-product.html',
    active: false
  },
  {
    link: 'Contact',
    url: 'contact.html',
    active: false
  },
]

export const cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
