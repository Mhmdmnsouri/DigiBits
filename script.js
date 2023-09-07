let btcPriceElem = document.getElementById('btcPrice');
let ethPriceElem = document.getElementById('ethPrice');
let usdtPriceElem = document.getElementById('usdtPrice');
let bnbPriceElem = document.getElementById('bnbPrice');
let xrpPriceElem = document.getElementById('xrpPrice');
let usdcPriceElem = document.getElementById('usdcPrice');
let adaPriceElem = document.getElementById('adaPrice');
let dogePriceElem = document.getElementById('dogePrice');
let solPriceElem = document.getElementById('solPrice');
let trxPriceElem = document.getElementById('trxPrice');

let settings = {
    'asunc': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbnb%2Cripple%2Cusd%2Ccardano%2Cbinancecoin%2CdogeCoin%2Csolana%2Ctron&vs_currencies=usd',
    'method': 'GET',
    'headers': {}
}
console.log(settings);
$.ajax(settings).done(function (response) {
    btcPriceElem.innerHTML = `$${response.bitcoin.usd}`;
    ethPriceElem.innerHTML = `$${response.ethereum.usd}`;
    usdtPriceElem.innerHTML = `$${response.tether.usd}`
    bnbPriceElem.innerHTML = `$${response.binancecoin.usd}`
    xrpPriceElem.innerHTML = `$${response.ripple.usd}`
    usdcPriceElem.innerHTML = `$${response.usd.usd}`
    adaPriceElem.innerHTML = `$${response.cardano.usd}`
    dogePriceElem.innerHTML = `$${response.dogecoin.usd}`
    solPriceElem.innerHTML = `$${response.solana.usd}`
    trxPriceElem.innerHTML = `$${response.tron.usd}`
    console.log(response)
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
