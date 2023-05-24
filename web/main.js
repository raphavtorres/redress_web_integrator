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

function createModal(item) {
    var name_elem = document.querySelector("#name_element");
    var price_elem = document.querySelector("#price_elem");
    var image_elem = document.querySelector("#image_elem");
    var desc_elem = document.querySelector("#desc_elem");

    name_elem.innerHTML = name_products[item];
    price_elem.innerHTML = "R$ " + price_products[item].toFixed(2);
    image_elem.src = images_products[item];
    desc_elem.innerHTML = desc_products[item];
}

var wrap = document.querySelector('.wrapper');

for (var i = 0; i < name_products.length; i++) {
    var card = `
        <div class="card">
            <img src="images/img-card/card-img-${i}.webp" alt="">
            <h5 class="card-text">${name_products[i]}</h5>
            <hr width="80%" style="margin: auto;">
            <p class="card-text">R$ ${price_products[i].toFixed(2)}</p>
            <div>
                <a onclick="createModal(${i})" href="#" class="btn btn-primary" data-toggle="modal"
                    data-target=".bd-example-modal-lg">Details</a>
                <a onclick="addProdCart('${i}', '${name_products[i]}', ${price_products[i].toFixed(2)}, '${desc_products[i]}');" href="#" class="btn btn-primary cart-btn-card"></a>
            </div>
        </div>
    `;

    wrap.innerHTML += card;
}

var cartBody = document.querySelector("#cart-body");
var totalPrice = document.querySelector("#total-price-cart");

function addProdCart(index, name, price, desc){
    
    var content = `
    <div id="card-content-${index}" class="cart-content">
        <img class="img-prod-cart" src="images/img-card/card-img-${index}.webp" alt="">
        <div class="cart-content-text">
            <div class="txt-and-delbtn">
                <h3>${name}</h3>
                <button onclick="dellProdCart(${index}, ${price})" class="cart-del-prod"></button>
            </div>
            <p>${desc}</p>
            <input class="amount-prod-cart" type="number" name="" id="" value="1" min="1">
            <h3 class="prod-price-cart">R$ ${price.toFixed(2)}</h3>
        </div>
    </div>
    <hr id="hr-cart-content-${index}" width="90%" style="margin: 1rem 0"></hr>`

    cartBody.innerHTML += content;
    
    if (totalPrice.innerHTML === "") {
        totalPrice.innerHTML = "0";
    }
    priceTotal = parseFloat(totalPrice.innerHTML);
    priceProd = parseFloat(price);

    totalPrice.innerHTML = priceTotal + priceProd;
}

function dellProdCart(index, price) {
    var elementToRemove = document.querySelector(`#card-content-${index}`);
    var hrToRemove = document.querySelector(`#hr-cart-content-${index}`);
    cartBody.removeChild(elementToRemove);
    cartBody.removeChild(hrToRemove);

    priceTotal = parseFloat(totalPrice.innerHTML);
    priceProd = parseFloat(price);

    priceTotal -= priceProd;
}
