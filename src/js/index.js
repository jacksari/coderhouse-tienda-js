import { products} from "./store";
import {loadSections} from "./sections";

// Obtener productos
const getProducts = (feat) => {
    console.log('cargar productos', products)
    if (feat) {
        const arrayProducts = products.filter(product => product.fields.featured === true);
        renderProducts(arrayProducts);
    } else {
        renderProducts(products);
    }
}

const renderProducts = (array = []) => {
    const productos = document.getElementById("products-list");
    let html = '';
    array.forEach(product => {
        const { name, image, colors, company, price, featured } = product.fields;
        const img = image[0].url;
        html += `
            <div class="col-sm-6 col-lg-4">
                <a href="/single-product.html?product=${product.id}" class="d-block text-center mb-4">
                    <div class="product-list pb-3">
                        <div class="product-image position-relative">
                            <span class="sale">Sale</span>
                            <img src="${img}" alt="products" class="img-fluid product-image-first">
                            <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3aaa3d4c-33d5-4df8-8dc2-17fb1a0f302a/15.jpg" alt="products" class="img-fluid product-image-secondary">
                        </div>
                        <div class="product-name pt-3">
                            <h3 class="text-capitalize">${ name }</h3>
                            <p class="mb-0 amount">$ ${price} <del>$580.00</del></p>
                            <div class="py-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <button type="button" class="btn btn-primary mt-1">ADD TO CARD</button>
                        </div>
                    </div>
                </a>
            </div>
        `
    });
    productos.innerHTML = html;

}

// Obtener producto por id
const getProductById = (id) => {
    return products.find(product => product.id === id);
}

// primera carga
window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
    // Cargar secciones
    loadSections();
    // Buscar el url del proyecto
    searchUrl();

});

const searchUrl = () => {
    const url = window.location.href.split('/')
    const path = url[window.location.href.split('/').length - 1];

    if(path === '/' || path === 'index.html'){
        // En el caso estemos en la url principal llamará a los productos
        getProducts(true);
    } else if(path === 'products.html'){
        getProducts(false)
    } else {
        // Caso contrario hará un buscado por el id del producto que es un parámetro
        const idProduct = window.location.href.split('product=')[window.location.href.split.length - 1]
        const product = getProductById(idProduct);
        console.log(product)
    }
}


// Agregar producto al carrito
function addProductCart (id) {

}

// Eliminar producto del carrito
function removeProductCart (id) {

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

