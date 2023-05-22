var name_products = ["Calça", "Blusa"]
var price_products = [200.00, 90.00]
var images_products = ["images/card-img-1.webp", "images/card-img-1.webp"]
var desc_products = ["Description1", "Description2"]

function createModal(item) {
    var name_elem = document.querySelector("#name_element");
    var price_elem = document.querySelector("#price_elem");
    var image_elem = document.querySelector("#image_elem");
    var desc_elem = document.querySelector("#desc_elem");

    name_elem.innerHTML = name_products[item];
}
