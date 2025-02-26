let money = 0;
let perClick = 1.32;
let upgradeCost = 10;
let cryptoPrice = 10;
let stockPrice = 50;

document.getElementById("click-button").addEventListener("click", function () {
    money += perClick;
    updateDisplay();
});

document.getElementById("upgrade-button").addEventListener("click", function () {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        perClick *= 1.1; 
        upgradeCost *= 2;
        updateDisplay();
    }
});

document.getElementById("buy-crypto").addEventListener("click", function () {
    if (money >= cryptoPrice) {
        money -= cryptoPrice;
        cryptoPrice *= (Math.random() * 0.2 + 0.9);
        updateDisplay();
    }
});

document.getElementById("buy-stock").addEventListener("click", function () {
    if (money >= stockPrice) {
        money -= stockPrice;
        stockPrice *= (Math.random() * 0.2 + 0.9);
        updateDisplay();
    }
});

function updateDisplay() {
    document.getElementById("money").textContent = money.toFixed(2);
    document.getElementById("upgrade-button").textContent = `Upgrade (Cost: $${upgradeCost.toFixed(2)})`;
    document.getElementById("click-button").textContent = `💳 Tap Card (+$${perClick.toFixed(2)})`;
    document.getElementById("crypto-price").textContent = `$${cryptoPrice.toFixed(2)}`;
    document.getElementById("stock-price").textContent = `$${stockPrice.toFixed(2)}`;
}

setInterval(() => {
    cryptoPrice *= (Math.random() * 0.1 + 0.95);
    stockPrice *= (Math.random() * 0.1 + 0.95);
    updateDisplay();
}, 5000);
