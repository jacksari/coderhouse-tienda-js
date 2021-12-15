
// Cargar el boton
$('btn-send').ready(function() {
    console.log( "El DOM esta listo 123" );
});

// Agregar oferta especial
$("#offert-index").prepend(`
     <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="headline text-center mb-5">
                    <h2 class="pb-3 position-relative d-inline-block">SUMMER SALE</h2>
                </div>
            </div>

            <div class="col-sm-12 col-lg-7 text-center text-lg-start">
                <div class="countdown-container">
                    <h2 class="text-uppercase">Sexy Women Floral Embroidery</h2>
                    <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <ul class="list-unstyled countdown-counter">
                        <li><span class="fs-1 d-block" id="days">00</span> Days</li>
                        <li><span class="fs-1 d-block" id="hours">00</span> Hr</li>
                        <li><span class="fs-1 d-block" id="min">00</span> Min</li>
                        <li><span class="fs-1 d-block" id="sec">00</span> Sec</li>
                    </ul>
                    <span class="countdown-price h3 d-block mb-4">$420.00 <del>$670.00</del></span>
                    <button type="button" class="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
            <div class="col-sm-12 col-lg-5">
                <div class="special-img position-relative">
                    <span class="">Sale</span>
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-deal-product-sale-promo-discount-offer-advert-retail-design-template-0826e157fd63bbb63db679495d5460fd_screen.jpg?ts=1561507290" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
`);

// Agregar informacion de contacto
$("#contact-information").prepend(`
                    <h4 class="fw-bold">Contact Info</h4>
                    <ul class="info list-unstyled">
                        <li class="d-flex align-items-center">
                            <span class="pe-3 ti-location-pin fs-5"></span>
                            <p><a href="">Lorem ipsum dolor sit amet, consectetur.</a></p>
                        </li>
                        <li class="d-flex align-items-center">
                            <span class="pe-3 ti-mobile fs-5"></span>
                            <p><a href="">+91 999-999-9999</a></p>
                        </li>
                        <li class="d-flex align-items-center">
                            <span class="pe-3 ti-envelope fs-5"></span>
                            <p><a href="">Info@eshop.in</a></p>
                        </li>
                    </ul>
`);

// Agregar inputs con jquery
$("#form-contact-index").prepend(`
                    <form id="form-contact">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input required type="text" class="form-control" name="name" id="name" placeholder="Your name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input required type="email" class="form-control" name="email" id="email" placeholder="Email address">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input required class="textarea" name="message" cols="30" rows="4" id="message" placeholder="Enter your message">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button class="btn btn-primary" id="btn-send" type="submit">
                                    <i class="fas fa-paper-plane"></i>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
`);

//Asociamos el evento change a todos los inputs
$(".form-control").change(function (e) {
    //console.log(e.target.value);
    //console.log(this.value);
});

// Enviar formulario con jquery
$("#form-contact").submit(function (e) {
    //Prevenimos el comportamiento de submit
    e.preventDefault();
    //Obtenemos hijos del formulario
    const $name = document.querySelector('#name')
    const $email = document.querySelector('#email')
    const $message = document.querySelector('#message')
    const mensaje = {
        name: $name.value,
        email: $email.value,
        message: $message.value
    }
    console.log('Mensaje enviado', mensaje);
    //Enviar petición POSt al backend
    //fetch('/', {
    //    method: 'POST',
    //    body: mensaje,
    //})
    // Limpiar datos una vez ya se envió los datos y todo fue satisfactorio
    $name.value = '';
    $email.value = '';
    $message.value = '';
});



$( "#logo" ).click(function() {
    $( "#logo" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500 );
});

