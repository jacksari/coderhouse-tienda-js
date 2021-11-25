import {cart, products, getProductByIdApi} from "./store";
import {loadCartHtml, loadSections} from "./sections";

// Obtener productos
const getProducts = async (feat) => {
    let productos = await products();
    // Validar featured (true para productos del home)
    // sin valor para los productos totales

    if (feat) {
        const arrayProducts = productos.filter(product => product.fields.featured === true);
        renderProducts(arrayProducts);
    } else {
        renderProducts(productos);
    }
}

// renderiza todos lor productos
const renderProducts = (array = []) => {
    const productos = document.getElementById("products-list");
    let html = '';
    array.forEach(product => {
        html += getProductHtml(product);
    });
    productos.innerHTML = html;
}

// Devolver html de un producto
const getProductHtml = product => {
    const { name, image, colors, company, price, featured } = product.fields;
    const img = image[0].url;
    return `
            <div class="col-sm-6 col-lg-4">
                <div class="d-block text-center mb-4">
                    <div class="product-list pb-3">
                        <a href="/single-product.html?product=${product.id}">
                            <div class="product-image position-relative">
                                <span class="sale">Sale</span>
                                <img src="${img}" alt="products" class="img-fluid product-image-first">
                                <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3aaa3d4c-33d5-4df8-8dc2-17fb1a0f302a/15.jpg" alt="products" class="img-fluid product-image-secondary">
                            </div>
                        </a>
                        <div class="product-name pt-3">
                            <a href="/single-product.html?product=${product.id}">
                                <h3 class="text-capitalize">${name}</h3>
                            </a>
                            <p class="mb-0 amount">$ ${price} <del>$580.00</del></p>
                            <div class="py-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <button type="button" class="btn btn-primary mt-1" onclick="addProductCart('${product.id}')">ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
}

// primera carga
window.addEventListener("load",  function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
    // Cargar secciones
    loadSections();
    // Buscar el url del proyecto
    searchUrl();
    // Cargar productos al html del cart
    loadCartHtml(cart)
});

// Buscar url y dependiendo de eso elegir la funcionalidad
const searchUrl = async () => {
    const url = window.location.href.split('/')
    const path = url[window.location.href.split('/').length - 1];

    if(path === '' || path === 'index.html'){
        // En el caso estemos en la url principal llamará a los productos
        getProducts(true);
    } else if(path === 'products.html'){
        getProducts(false)
    } else {
        // Caso contrario hará un buscado por el id del producto que es un parámetro
        const idProduct = window.location.href.split('product=')[window.location.href.split.length - 1]
        // Cargar producto por id desde la API
        const product = await getProductByIdApi(idProduct);

        console.log(product)
    }
}

// Cambiar de página a la hora de listar productos
function updatePageProducts(id) {
}

// Filtrar productos por precio
function filterPrice () {
}

// Filtrar productos por categoria
function filterCategory () {
}

// Filtrar por nombre
function filterSearch () {
}

// Agregar producto al carrito
window.addProductCart = function addProductCart (idProduct) {
    let existe = false;
    const productsCart = getLocalStorageProducts().map(product => {
      if(product.id === idProduct){
          console.log('existe')
          existe = true;
          product.cantidad += 1;
          return product;
      }  else {
          return product;
      }
    });
    //console.log('array', productsCart)
    if(!existe){
        const product = getProductById(idProduct);
        product.cantidad = 1;
        productsCart.push(getProductById(idProduct))
    }
    console.log('ui', productsCart)
    storageRefresh(productsCart)
}

// Agregar cantidad del producto n el carrito
window.addProductAmountCart = function addProductAmountCart (idProduct) {
    const products = getLocalStorageProducts().map(product => {
        if(product.id === idProduct){
            product.cantidad +=1;
            return product
        } else {
            return product
        }
    });
    storageRefresh(products);
}

// Disminuir cantidad de producto del carrito
// en caso sea 0 el producto se elimina
window.removeProductAmountCart = function removeProductAmountCart (idProduct) {
    const products = getLocalStorageProducts().map(product => {
        if(product.id === idProduct){
            product.cantidad -=1;
            return product
        } else {
            return product
        }
    }).filter(product => product.cantidad !== 0)
    storageRefresh(products)
}

// Refrescar localstorage
const storageRefresh = (products) => {
    localStorage.removeItem('cart')
    loadCartHtml(products)
    localStorage.setItem('cart', JSON.stringify(products))
}

// Retornar productos del localstorage
const getLocalStorageProducts = () => {
    return JSON.parse(localStorage.getItem('cart'));
}
