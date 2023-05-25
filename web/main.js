// Products Lists

var name_products = [
    "Blusão Em Moletom Com Bolso Canguru Com Lettering Fearless Preto",
    "Blusão Fechado Básico Em Moletom Com Capuz E Bolso Canguru Marrom", 
    "Jaqueta Com Capuz E Fechamento Frontal Preto", 
    "Jaqueta Puffer Em Poliamida Com Gomos E Forro De Sherpa Preto", 
    "Calça Jogger Cargo Em Poliamida Com Bolsos Utilitários Marrom", 
    "Calça Slim Em Soft Touch Com Textura E Barra Dobrada Bege", 
    "Bermuda Slim Jeans Com Rasgos E Bolsos Preto Fosco"
]
var price_products = [
    179.90, 
    159.90, 
    319.90, 
    359.90, 
    179.90, 
    199.90, 
    119.90
]
var images_products = [
    "images/img-card/card-img-0.webp", 
    "images/img-card/card-img-1.webp", 
    "images/img-card/card-img-2.webp", 
    "images/img-card/card-img-3.webp",
    "images/img-card/card-img-4.webp",
    "images/img-card/card-img-5.webp",
    "images/img-card/card-img-6.webp",
]
var desc_products = [
    "Blusão em moletom com gola com capuz, punhos ajustados e bolso canguru com etiquetinha aplicada com lettering Fearless. Confeccionado em material responsável.",
    "Blusão masculino em moletom, com capuz, cava raglan e punhos ajustados. Além de mega confortável por seu tecido ser em moletom, essa peça é cheia de estilo, além de muito descolada. ",
    "Jaqueta com capuz em cor contrastante, fechamento frontal por zíper e bolsos.", 
    "Aconchegante e confortável, a jaqueta puffer com capuz, zíper, gomos e forro de sherpa, é perfeita para compor seus visuais de inverno. O modelo cheio de estilo, promove looks perfeitos para usar em diversos momentos casuais.", 
    "Calça jogger cargo, com cós elástico, cordão para ajuste, bolsos cargo com zíper e punhos ajustados.", 
    "Calça masculina em tecido soft touch, modelo slim, confeccionada com material mais sustentável, com leve textura, cós elástico, cordão para ajuste, bolsos e barra dobrada.", 
    "Bermuda jeans masculina, modelo slim, com bolsos e rasgos. A modelagem slim da peça ajusta elegantemente ao corpo, e seus rasgos dão aquele toque final super estiloso."
]

// DECLARING VARIABLES
var wrap = document.querySelector('.wrapper');
var cartBody = document.querySelector("#cart-body");
var totalPrice = document.querySelector("#total-price-cart");
var productsInCart = [];
var detailModals = [];


// CREATING CARDS
for (var i = 0; i < name_products.length; i++) {
    var card = `
        <div class="card">
            <img src="images/img-card/card-img-${i}.webp" alt="">
            <h5 class="card-text">${name_products[i]}</h5>
            <hr width="80%" style="margin: auto;">
            <p class="card-text">R$ ${price_products[i].toFixed(2)}</p>
            <div>
                <a id="link-open-detail" onclick="createModal(${i})" href="#" class="btn btn-primary" data-toggle="modal"
                    data-target="#detail-modal-${i}">Details</a>
                <a data-toggle="modal" data-target="#modalCartSide" onclick="addProdCart('${i}', '${name_products[i]}', ${price_products[i].toFixed(2)}, '${desc_products[i]}');" href="#" class="btn btn-primary cart-btn-card"></a>
            </div>
        </div>
    `;
    wrap.innerHTML += card;
}

// FUNCTIONS
// function createModal(item) {
    // var nameElement = document.querySelector("#name-element");
    // var priceElement = document.querySelector("#price-elem");
    // var imageElement = document.querySelector("#image-elem");
    // var descElement = document.querySelector("#desc-elem");
    // var btnAddToCart = document.querySelector("#add-cart-btn");


    // nameElement.innerHTML = name_products[item];
    // priceElement.innerHTML = "R$ " + price_products[item].toFixed(2);
    // imageElement.src = images_products[item];
    // descElement.innerHTML = desc_products[item];

    // btnAddToCart.addEventListener("click", addProdCartDecorator(
    //     `${item}`, name_products[item], price_products[item].toFixed(2), desc_products[item]
    // ));

 
// }


function createModal(item) {
    if (detailModals.indexOf(item) <= -1) {
        detailModals.push(item);

        var name = name_products[item];
        var price = price_products[item].toFixed(2);
        var desc = desc_products[item];
        
        var html = `
        <div id="detail-modal-${item}" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="div-img-modal">
                        <img id="image-elem-${item}" src="${images_products[item]}" alt="">
                    </div>
                    <div class="div-img-details">
                        <div class="prod-and-price-modal">
                            <h1 id="name-element-${item}" class="title-modal">${name}</h1>
                            <h2 id="price-elem-${item}" class="price-modal">R$ ${price}</h2>
                        </div>
                        <div class="div-detail-modal">
                            <h3 class="detail-modal">Detalhes</h3>
                            <p id="desc-elem-${item}">${desc}</p>
                        </div>
                        <div class="div-sizes-modal">
                            <h3>Size</h3>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="radio" value="p" checked>
                                <label class="form-check-label" for="p">P</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="radio" value="m">
                                <label class="form-check-label" for="m">M</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="radio" value="g">
                                <label class="form-check-label" for="g">G</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="radio" value="gg">
                                <label class="form-check-label" for="gg">GG</label>
                            </div>
                        </div>
                        <div class="div-btn-model">
                            <button id="add-cart-btn-${item}" onclick="addProdCart(${item}, '${name}', ${price}, '${desc}');" data-dismiss="modal" data-toggle="modal" data-target="#modalCartSide" class="btn btn-add-cart-modal">Adicionar ao carrinho</button>
                        </div>
                        <div class="div-img-icon-model">
                            <img src="images/icon-delivery truck.svg" alt="">
                            <p>Frete grátis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        var prodDetailSec = document.querySelector("#prod-detail-sec");
        var htmlNode = document.createRange().createContextualFragment(html);
        prodDetailSec.appendChild(htmlNode); 
    }
}

function createCartProd(index, name, price, desc) {
    price = parseFloat(price).toFixed(2);
    productsInCart.push(index);
    var content = `
    <div id="card-content-${index}" class="cart-content">
        <img class="img-prod-cart" src="images/img-card/card-img-${index}.webp" alt="">
        <div class="cart-content-text">
            <div class="txt-and-delbtn">
                <h3>${name}</h3>
                <button onclick="dellProdCart(${index})" class="cart-del-prod"></button>
            </div>
            <p>${desc}</p>
            <h3> Size: </h3><p>P</p>
            <input id="amount-prod-cart-${index}" onchange="uploadPrice(${index}, ${price})" class="amount-prod-cart" type="number" name="" value="1" min="1">
            <h3 id="prod-price-${index}" class="prod-price-cart">R$ ${price}</h3>
        </div>
    </div>
    <hr id="hr-cart-content-${index}" width="90%" style="margin: 1rem 0"></hr>`
    var contentNode = document.createRange().createContextualFragment(content);
    cartBody.appendChild(contentNode);    
}

// function addProdCartDecorator(index, name, price, desc){
//     function addProdCart() {
//         if (productsInCart.indexOf(index) > -1) {
//             var amountProdCart = document.querySelector(`#amount-prod-cart-${index}`);
//             if (amountProdCart === null) 
//                 amountProdCart = 0;
//             amountProdCart.value++;
//         } else {
//             // Creating card if it doesn't exist
//             createCartProd(index, name, price, desc);
//         }
//         console.log(productsInCart);
//         uploadPrice(index, price);
//     }
//     return addProdCart;
// }

function addProdCart(index, name, price, desc) {
    if (productsInCart.indexOf(index) > -1) {
        var amountProdCart = document.querySelector(`#amount-prod-cart-${index}`);
        if (amountProdCart === null) 
            amountProdCart = 0;
        amountProdCart.value++;
    } else {
        // Creating card if it doesn't exist
        createCartProd(index, name, price, desc);
    }
    uploadPrice(index, price);
}


function uploadPrice(index, price) {
    var amountProdCart = document.querySelector(`#amount-prod-cart-${index}`);
    var allAmountProd = document.querySelectorAll('.prod-price-cart');
    var priceProd = document.querySelector(`#prod-price-${index}`);
    priceProd.innerHTML = (price * amountProdCart.value).toFixed(2);

    if (totalPrice.innerHTML === "") {
        totalPrice.innerHTML = "0";
    }
    if (priceProd.innerHTML === "") {
        priceProd.innerHTML = "0"
    }

    var prices = 0;
    allAmountProd.forEach(priceElem => prices += parseFloat(priceElem.innerHTML));
    totalPrice.innerHTML = prices.toFixed(2);
}

function dellProdCart(index) { 
    console.productsInCart;
    var pos = productsInCart.indexOf(`${index}`);
    productsInCart.splice(pos, 1);
    console.productsInCart;

    var elementToRemove = document.querySelector(`#card-content-${index}`);
    var hrToRemove = document.querySelector(`#hr-cart-content-${index}`);
    cartBody.removeChild(elementToRemove);
    cartBody.removeChild(hrToRemove);


    var allAmountProd = document.querySelectorAll('.prod-price-cart');

    var prices = 0;
    allAmountProd.forEach(price => prices += parseFloat(price.innerHTML));
    totalPrice.innerHTML = prices.toFixed(2);
}

