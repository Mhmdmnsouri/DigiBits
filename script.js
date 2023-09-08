$(document).ready(() => {
    $('.topCoins').on('click', () => {
        $('html, body').animate({
            scrollTop: $('#TopCoinsSection').offset().top
        }, 1000);
    });
});

let coinName1Elem = document.getElementById('coinName1');
let coinName2Elem = document.getElementById('coinName2');
let coinName3Elem = document.getElementById('coinName3');
let coinName4Elem = document.getElementById('coinName4');
let coinName5Elem = document.getElementById('coinName5');
let coinName6Elem = document.getElementById('coinName6');
let coinName7Elem = document.getElementById('coinName7');
let coinName8Elem = document.getElementById('coinName8');
let coinName9Elem = document.getElementById('coinName9');
let coinName10Elem = document.getElementById('coinName10');

let coinSymbol1Elem = document.getElementById('coinSymbol1');
let coinSymbol2Elem = document.getElementById('coinSymbol2');
let coinSymbol3Elem = document.getElementById('coinSymbol3');
let coinSymbol4Elem = document.getElementById('coinSymbol4');
let coinSymbol5Elem = document.getElementById('coinSymbol5');
let coinSymbol6Elem = document.getElementById('coinSymbol6');
let coinSymbol7Elem = document.getElementById('coinSymbol7');
let coinSymbol8Elem = document.getElementById('coinSymbol8');
let coinSymbol9Elem = document.getElementById('coinSymbol9');
let coinSymbol10Elem = document.getElementById('coinSymbol10');

let coinPrice1Elem = document.getElementById('coinPrice1');
let coinPrice2Elem = document.getElementById('coinPrice2');
let coinPrice3Elem = document.getElementById('coinPrice3');
let coinPrice4Elem = document.getElementById('coinPrice4');
let coinPrice5Elem = document.getElementById('coinPrice5');
let coinPrice6Elem = document.getElementById('coinPrice6');
let coinPrice7Elem = document.getElementById('coinPrice7');
let coinPrice8Elem = document.getElementById('coinPrice8');
let coinPrice9Elem = document.getElementById('coinPrice9');
let coinPrice10Elem = document.getElementById('coinPrice10');

let coinMC1Elem = document.getElementById('coinMC1');
let coinMC2Elem = document.getElementById('coinMC2');
let coinMC3Elem = document.getElementById('coinMC3');
let coinMC4Elem = document.getElementById('coinMC4');
let coinMC5Elem = document.getElementById('coinMC5');
let coinMC6Elem = document.getElementById('coinMC6');
let coinMC7Elem = document.getElementById('coinMC7');
let coinMC8Elem = document.getElementById('coinMC8');
let coinMC9Elem = document.getElementById('coinMC9');
let coinMC10Elem = document.getElementById('coinMC10');

let coinATH1Elem = document.getElementById('coinATH1');
let coinATH2Elem = document.getElementById('coinATH2');
let coinATH3Elem = document.getElementById('coinATH3');
let coinATH4Elem = document.getElementById('coinATH4');
let coinATH5Elem = document.getElementById('coinATH5');
let coinATH6Elem = document.getElementById('coinATH6');
let coinATH7Elem = document.getElementById('coinATH7');
let coinATH8Elem = document.getElementById('coinATH8');
let coinATH9Elem = document.getElementById('coinATH9');
let coinATH10Elem = document.getElementById('coinATH10');

let coinCS1Elem = document.getElementById('coinCS1');
let coinCS2Elem = document.getElementById('coinCS2');
let coinCS3Elem = document.getElementById('coinCS3');
let coinCS4Elem = document.getElementById('coinCS4');
let coinCS5Elem = document.getElementById('coinCS5');
let coinCS6Elem = document.getElementById('coinCS6');
let coinCS7Elem = document.getElementById('coinCS7');
let coinCS8Elem = document.getElementById('coinCS8');
let coinCS9Elem = document.getElementById('coinCS9');
let coinCS10Elem = document.getElementById('coinCS10');



let topCoins = {
    'asunc': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cusd%2Ctether%2Csolana%2Cripple%2Ctron%2Cbinancecoin%2Cdogecoin%2Ccardano%2C&order=market_cap_desc&sparkline=false',
    'method': 'GET',
    'headers': {}
}

$.ajax(topCoins).done(response => {
    coinName1Elem.innerHTML = `${response[0].name}`
    coinSymbol1Elem.innerHTML = `${response[0].symbol}`
    coinPrice1Elem.innerHTML = `$${response[0].current_price}`;
    coinMC1Elem.innerHTML = `$${response[0].market_cap}`
    coinATH1Elem.innerHTML = `$${response[0].ath}`
    coinCS1Elem.innerHTML = `$${response[0].circulating_supply} ${response[0].symbol.toUpperCase()}`;
    coinName2Elem.innerHTML = `${response[1].name}`
    coinPrice2Elem.innerHTML = `$${response[1].current_price}`;
    coinSymbol2Elem.innerHTML = `${response[1].symbol}`
    coinMC2Elem.innerHTML = `$${response[1].market_cap}`;
    coinATH2Elem.innerHTML = `$${response[1].ath}`
    coinCS2Elem.innerHTML = `$${response[1].circulating_supply} ${response[1].symbol.toUpperCase()}`;
    coinName3Elem.innerHTML = `${response[2].name}`
    coinPrice3Elem.innerHTML = `$${response[2].current_price}`
    coinSymbol3Elem.innerHTML = `${response[2].symbol}`
    coinMC3Elem.innerHTML = `$${response[2].market_cap}`
    coinATH3Elem.innerHTML = `$${response[2].ath}`
    coinCS3Elem.innerHTML = `$${response[2].circulating_supply} ${response[2].symbol.toUpperCase()}`;
    coinName4Elem.innerHTML = `${response[3].name}`
    coinPrice4Elem.innerHTML = `$${response[3].current_price}`
    coinSymbol4Elem.innerHTML = `${response[3].symbol}`
    coinMC4Elem.innerHTML = `$${response[3].market_cap}`
    coinATH4Elem.innerHTML = `$${response[3].ath}`
    coinCS4Elem.innerHTML = `$${response[3].circulating_supply} ${response[3].symbol.toUpperCase()}`;
    coinName5Elem.innerHTML = `${response[4].name}`
    coinPrice5Elem.innerHTML = `$${response[4].current_price}`
    coinSymbol5Elem.innerHTML = `${response[4].symbol}`
    coinMC5Elem.innerHTML = `$${response[4].market_cap}`
    coinATH5Elem.innerHTML = `$${response[4].ath}`
    coinCS5Elem.innerHTML = `$${response[4].circulating_supply} ${response[4].symbol.toUpperCase()}`;
    coinName6Elem.innerHTML = `${response[5].name}`
    coinPrice6Elem.innerHTML = `$${response[5].current_price}`
    coinSymbol6Elem.innerHTML = `${response[5].symbol}`
    coinMC6Elem.innerHTML = `$${response[5].market_cap}`
    coinATH6Elem.innerHTML = `$${response[5].ath}`
    coinCS6Elem.innerHTML = `$${response[5].circulating_supply} ${response[5].symbol.toUpperCase()}`;
    coinName7Elem.innerHTML = `${response[6].name}`
    coinPrice7Elem.innerHTML = `$${response[6].current_price}`
    coinSymbol7Elem.innerHTML = `${response[6].symbol}`
    coinMC7Elem.innerHTML = `$${response[6].market_cap}`
    coinATH7Elem.innerHTML = `$${response[6].ath}`
    coinCS7Elem.innerHTML = `$${response[6].circulating_supply} ${response[6].symbol.toUpperCase()}`;
    coinName8Elem.innerHTML = `${response[7].name}`
    coinPrice8Elem.innerHTML = `$${response[7].current_price}`
    coinSymbol8Elem.innerHTML = `${response[7].symbol}`
    coinMC8Elem.innerHTML = `$${response[7].market_cap}`
    coinATH8Elem.innerHTML = `$${response[7].ath}`
    coinCS8Elem.innerHTML = `$${response[7].circulating_supply} ${response[7].symbol.toUpperCase()}`;
    coinName9Elem.innerHTML = `${response[8].name}`
    coinPrice9Elem.innerHTML = `$${response[8].current_price}`
    coinSymbol9Elem.innerHTML = `${response[8].symbol}`
    coinMC9Elem.innerHTML = `$${response[8].market_cap}`
    coinATH9Elem.innerHTML = `$${response[8].ath}`
    coinCS9Elem.innerHTML = `$${response[8].circulating_supply} ${response[8].symbol.toUpperCase()}`;
    coinName10Elem.innerHTML = `${response[9].id}`
    coinPrice10Elem.innerHTML = `$${response[9].current_price}`
    coinSymbol10Elem.innerHTML = `${response[9].symbol}`
    coinMC10Elem.innerHTML = `$${response[9].market_cap}`
    coinATH10Elem.innerHTML = `$${response[9].ath}`
    coinCS10Elem.innerHTML = `$${response[9].circulating_supply} ${response[9].id.toUpperCase()}`;


    console.log(response);
    // btcPriceElem.innerHTML = `$${response.id=""};
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

const textDefinitionElem = document.querySelector('.textDefinition');
const defImageElem = document.querySelector('.defImage');

function selectedBtn(e) {
    let elems = document.querySelector(".active");
    if (elems !== null) {
        elems.classList.remove("active");
    }
    e.target.classList.add("active");
}

function defgenerator(arg) {
    if (arg == btc) {
        textDefinitionElem.innerHTML = 'Bitcoin (BTC) was invented by a pseudonymous individual or group named Satoshi Nakamoto in 2008 and is the world’s first enduring cryptocurrency that succeeded where decades of digital cash experiments failed. Bitcoin’s monetary policy is enforced through a unique blend of software, cryptography and financial incentives rather than the whim of trusted third parties. The Bitcoin network is powered by a cryptographically secure, verifiable database called the blockchain — itself a technological phenomenon.The Bitcoin ecosystem consists of a global network of stakeholders, including the miners that secure thnetwork and drive the issuance of the Bitcoin currency, the traders who speculate on this radicallmarket-driven asset, and the builders working to onboard people to the cryptocurrency paradigm.'
        defImageElem.src = "images/btc.webp";

    } else if (arg == eth) {
        textDefinitionElem.innerHTML = 'Ethereum launched in summer 2015 with the aim of expanding the use cases of blockchain and cryptocurrency to encompass all manner of decentralized applications beyond Bitcoin’s initial scope, from permissionless financial services and crowdfunding to new organizational structures. Ethereum was envisioned as a “global computer” that would allow developers to publish and execute apps powered by smart contracts — programmable scripts that facilitate the flow of digital assets. Ethereum’s native cryptocurrency, Ether (ETH), not only provides an incentive structure similar to Bitcoin (BTC) in securing and maintaining the network but is also used as “gas” to run transactions through smart contracts. This functions as a security measure to protect the network from inefficient code and attacks by malicious actors.'
        defImageElem.src = "images/eth.webp";


    } else if (arg == blockchain) {
        textDefinitionElem.innerHTML = 'Blockchains are the critical infrastructure underlying cryptocurrencies. The common feature of these distributed ledgers is the sequential updating of a cryptographically secure, verifiable transaction record among a network of peers all operating under a certain set of rules enforced through the software itself. This record is owned and operated in common by anyone anywhere. While research in shared ledger technology goes back decades, the arrival of the Bitcoin blockchain introduced the first distributed ledger technology that was thoroughly decentralized and resistant to censorship, seizure and collusion. Blockchain technology, in its various manifestations including the Ethereum blockchain and others, is ultimately a global consensus system — i.e., it allows people to coordinate and cooperate around a neutral source of information without trusting each other or a central administrator. The use cases are wide-ranging, from finance and energy trading to supply chain management. '
        defImageElem.src = "images/blockchain.webp";

    } else if (arg == nft) {
        textDefinitionElem.innerHTML = 'What are NFTs? NFTs explained in brief: Nonfungible tokens, or NFTs, are verifiably unique representations of digital and physical goods. Each NFT generally differs in makeup, and therefore likely differs in value as well. In the physical world, U.S. dollars are fungible. No value is forfeited if a person trades any given paper U.S. dollar for a different paper U.S. dollar. On the other hand, something such as artwork is generally nonfungible. The “Mona Lisa” is not of equal value to “The Persistence of Memory,” as both artworks are unique, deriving value as such. Based on distributed ledger technology, NFT crypto assets serve as a method of authentication for buyers of unique items, proving aspects such as ownership. NFTs became much more well known in 2020 and 2021. NFTs have potential for other use cases as well, such as companies tracking their internal resources or platforms verifying subscriptions and use.'
        defImageElem.src = "images/nft.webp";

    } else if (arg == defi) {
        textDefinitionElem.innerHTML = 'Decentralized finance, also known as DeFi, is a sector within the overall cryptocurrency and blockchain industry focused on providing a decentralized version of mainstream financial opportunities. In the mainstream world, financial institutions offer customers access to opportunities such as cash storage and loans. However, these offerings are governed by centralized entities. With the help of distributed ledger technology, or DLT, DeFi solutions offer a number of the same opportunities, but they are controlled by a large number of participants who abide by rules enforced by smart contracts. DeFi solutions also often give greater flexibility in terms of users’ ability to store and control their own assets. Additionally, decentralized exchanges, or DEXs, further decentralize digital asset trading, in contrast to trading on centralized digital asset platforms.'
        defImageElem.src = "images/defi.webp";
    }
}
