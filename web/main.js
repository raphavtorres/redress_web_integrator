var name_products = ["Jaqueta", "Camiseta Dry Fit", "2", "3", "4", "5", "6"]
var price_products = [200.00, 90.00, 2, 3, 4, 5, 6]
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
    "2", "3", "4", "5", "6"
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
