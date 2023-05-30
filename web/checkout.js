// GETTING TOTAL PRICE FROM INDEX.HTML
const totalPriceCheck = localStorage.getItem('totalPriceCheck');

console.log(totalPriceCheck);

var priceValue = document.querySelectorAll(".payment-price");

priceValue.forEach(element => {
    element.innerHTML = totalPriceCheck;
});


// GETTING CEP FROM USER AND SAVING IT IN JSON FILE
function createJson() {
    var cep = document.querySelector('#cep-user').value;
    if (cep == "") {
        window.alert("Preencha todos os campos obrigatórios!");
    } else {
        console.log(cep);
        const json = {
            "cep": cep,
        }
        console.log(cep)

        const jsonString = JSON.stringify(json, null, 2);
        const fileName = 'info.json';
        const link = document.createElement('a');


        link.href = URL.createObjectURL(new Blob([jsonString], { type: 'application/json' }));
        link.download = fileName;
        link.click();
    }  
}


// CHANGING IMAGES WITH HOVER
var iconMailNav = document.querySelector('#icon-mail-nav');
iconMailNav.addEventListener("mouseover", function() {
    iconMailNav.src="images/nav-icons/icon-mail-hover.svg";
});
iconMailNav.addEventListener("mouseout", function() {
    iconMailNav.src="images/nav-icons/icon-mail.svg";
});

var iconSearchNav = document.querySelector('#icon-search-nav');
iconSearchNav.addEventListener("mouseover", function() {
    iconSearchNav.src="images/nav-icons/icon-search-hover.svg";
});
iconSearchNav.addEventListener("mouseout", function() {
    iconSearchNav.src="images/nav-icons/icon-search.svg";
});
