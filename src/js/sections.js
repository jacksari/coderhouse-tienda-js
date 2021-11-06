// Cargar secciones
import {links} from "./store";

export const loadSections = () => {
    // Cargar Nav
    getNav();
    // Cargar footer
    getFooter();
}

// Cargar navbar
const getNav = () => {
    const nav = document.getElementById("navbar");
    const url = window.location.href.split('/')
    let path = url[window.location.href.split('/').length - 1];
    if(path === ''){
        path = 'index.html'
    }

    // Activar el link dependiendo de la ruta url
    let linksUpdate = links.map(link => {
        if (link.url === path) {
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
            <a class="navbar-brand" href="/">
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

// Cargar footer
const getFooter = () => {
    const footer = document.getElementById('footer');
    let html;
    html += `
        <div class="section-center">
        <div class="grid-footer">
            <div class="item-footer item1">
                <p>© 2021, <span class="jack">JACKSARI</span> All Rights Reserved.</p>
                <span>Powered By React and Gatsby</span>
            </div>
            <div class="item-footer item2">
                <h4>Quick Link</h4>
                <div class="links">
                    <a href="#">Advertins</a>
                    <a href="#">Advertins</a>
                    <a href="#">Advertins</a>
                </div>
            </div>
            <div class="item-footer item3">
                <h4>Quick Link</h4>
                <div class="links">
                    <a href="#">Advertins</a>
                    <a href="#">Advertins</a>
                    <a href="#">Advertins</a>
                </div>
            </div>
            <div class="item-footer item4">
                <h4>Quick Link</h4>
                <div class="social-links">
                    <a href="#">
                        <i class="fab fa-github"></i> Github
                    </a>
                    <a href="#">
                        <i class="fab fa-github"></i> Github
                    </a>
                    <a href="#">
                        <i class="fab fa-github"></i> Github
                    </a>
                </div>
            </div>
        </div>
        <div class="message">
            <p>Hecho con ❤️ en Perú para todo el mundo de habla hispana</p>
        </div>
    </div>
    `
    footer.innerHTML = html;
}


