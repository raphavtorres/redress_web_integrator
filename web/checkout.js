// GETTING TOTAL PRICE FROM INDEX.HTML
const totalPriceCheck = localStorage.getItem('totalPriceCheck');

console.log(totalPriceCheck);

var priceValue = document.querySelectorAll(".payment-price");

priceValue.forEach(element => {
    element.innerHTML = totalPriceCheck;
});


// GETTING CEP FROM USER AND SAVING IT IN JSON FILE

// document.querySelector('#btn-buy-checkout').addEventListener("click", createJsonGenerator(cep));

function createJson() {
    var cep = document.querySelector('#cep-user').value;
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
