import {links, products} from "./store";

// Obtener productos
const getProducts = (feat) => {
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

// cargar pantallas
window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
    // Cargar Nav
    getNav();
    // Buscar el url del proyecto
    const url = window.location.href.replace('http://localhost:9000', '');
    if(url === '/'){
        // En el caso estemos en la url principal llamará a los productos
        getProducts(true);
    } else if(url === '/products.html'){
        getProducts(false)
    } else {
        // Caso contrario hará un buscado por el id del producto que es un parámetro
        const idProduct = window.location.href.split('product=')[window.location.href.split.length - 1]
        const product = getProductById(idProduct);
        console.log('product', product)
    }
});


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

const getNav = () => {
    const nav = document.getElementById("navbar");
    const url = window.location.href.replace('http://localhost:9000', '');
    console.log(url)
    // Activar el link dependiendo de la ruta url
    let linksUpdate = links.map(link => {
        if (link.url === url) {
            link.active = true
            return link;
        } else {
            return link;
        }
    })
    let htmlLinks = '';
    // Cargar links con la clase active
    linksUpdate.forEach(link => {
        htmlLinks += `
            <a class="nav-link ${link.active ? 'nav-active' : ''}" aria-current="page" href="${link.url}">${link.link}</a>
        `;
    })
    nav.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="https://dojiw2m9tvv09.cloudfront.net/66454/1/1685aa5ec87a9b85d05ab5d870dc463a5e61fa69.png?1634711553716"
                     alt="Logo"
                     class="logo"
                >
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    ${htmlLinks}
                </div>
            </div>
        </div>
    </nav>
    `;
}
