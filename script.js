let btcprice = document.getElementById('bitcoin');
let ethprice = document.getElementById('ethereum');
let dogeprice = document.getElementById('dogecoin');

let settings = {
    'asunc': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    'method': 'GET',
    'headers': {}
}

$.ajax(settings).done(function (response) {
    console.log(response)
    btcprice.innerHTML = response.bitcoin.usd;
    ethprice.innerHTML = response.ethereum.usd;
    dogeprice.innerHTML = response.dogecoin.usd;
})

const navHeaderElem = document.querySelector('.navHeader');
const burgerElem = document.querySelector('.burger');
const barsElem = document.querySelector('.bars');
const closeElem = document.querySelector('.close');
const logoElem = document.querySelector('.logo');
const menuIconElem = document.querySelector('.menuIcon');

function toggleMenu() {
    if (navHeaderElem.classList.contains("showMenu")) {
        navHeaderElem.classList.remove("showMenu");
        closeElem.style.display = "none";
        barsElem.style.display = "block";
    } else {
        navHeaderElem.classList.add("showMenu");
        closeElem.style.display = "block";
        barsElem.style.display = "none";
    }
}

burgerElem.addEventListener("click", toggleMenu);