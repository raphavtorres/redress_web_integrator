var name_products = [
    "Jaqueta",
    "Camiseta Dry Fit", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6"
]
var price_products = [
    200.00, 
    90.00, 
    2, 
    3, 
    4, 
    5, 
    6
]
var images_products = [
    "images/card-img-1.webp", 
    "images/card-img-2.webp", 
    "images/card-img-2.webp", 
    "images/card-img-2.webp",
    "images/card-img-2.webp",
    "images/card-img-2.webp",
    "images/card-img-2.webp",
]
var desc_products = [
    "Essa é uma jaqueta",
    "Essa é uma camiseta para treino",
    "2", 
    "3", 
    "4", 
    "5", 
    "6"
]

function createModal(item) {
    var name_elem = document.querySelector("#name_element");
    var price_elem = document.querySelector("#price_elem");
    var image_elem = document.querySelector("#image_elem");
    var desc_elem = document.querySelector("#desc_elem");

    name_elem.innerHTML = name_products[item];
    price_elem.innerHTML = "R$ " + price_products[item];
    image_elem.src = images_products[item];
    desc_elem.innerHTML = desc_products[item];
}

{/* 
<div class="card">
    <img src="images/card-img-1.webp" alt="">
    <h5 class="card-text">Product Name</h5>
    <hr width="80%" style="margin: auto;">
    <p class="card-text">R$ 200,00</p>
    <div>
        <a onclick="createModal(0)" href="#" class="btn btn-primary" data-toggle="modal"
            data-target=".bd-example-modal-lg">Details</a>
        <a href="#" class="btn btn-primary cart-btn-card"></a>
    </div>
</div> */}

var wrap = document.querySelector('.wrapper');

for (var i = 0; i < name_products.length; i++) {
    var card = '<div class="card">' +
    `<img src="images/card-img-${i}.webp" alt="">` +
    `<h5 class="card-text">${name_products[i]}</h5>`+
    '<hr width="80%" style="margin: auto;">'+
    `<p class="card-text">R$ ${price_products[i]}</p>`+
    '<div>'+
        `<a onclick="createModal(${i})" href="#" class="btn btn-primary" data-toggle="modal"`+
            'data-target=".bd-example-modal-lg">Details</a>'+
        '<a href="#" class="btn btn-primary cart-btn-card"></a>'+
    '</div>'+
    '</div>';

    wrap.innerHTML += card;
}


console.log(card);