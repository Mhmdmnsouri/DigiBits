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

$.ajax(settings).done(function (response){
    console.log(response)
    btcprice.innerHTML = response.bitcoin.usd;
    ethprice.innerHTML = response.ethereum.usd;
    dogeprice.innerHTML = response.dogecoin.usd;
}) 