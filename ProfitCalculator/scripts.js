var mainElem = document.getElementById("main"),
    buyPriceElem = document.getElementById("buyPriceJs"),
    sellPriceElem = document.getElementById("sellPriceJs"),
    differenceElem = document.getElementById("differenceJs"),
    startAmountElem = document.getElementById("startAmountJs"),
    feeElem = document.getElementById("feeJs"),
    finalAmountElem = document.getElementById("finalAmountJs");

window.onload = function () {
    feeElem.value = 0.1;
}

mainElem.oninput = function () {
    var changedInput = event.target;

    var startAmount = startAmountElem.value,
        buyPrice = buyPriceElem.value,
        sellPrice = sellPriceElem.value,
        fee = feeElem.value,
        difference = differenceElem.value;

    if (changedInput.id == "differenceJs" ) {
        if (difference !="" && buyPrice != "" || sellPrice !="") {
            sellPriceElem.value = buyPrice * (+difference + fee/100*2)
        }

        if (difference !="" && sellPrice !="" && buyPrice == "") {
            buyPriceElem.value = sellPrice / (+difference - fee/100*2)
        }
    }

    if (changedInput.id != "differenceJs") {

        if (sellPrice != "" &&
            buyPrice != "" &&
            fee !="") {
            var difference = countDifference(buyPrice,
                                             sellPrice) - fee/100*2;
            differenceElem.value = difference.toFixed(4)
        }
        else {
            differenceElem.innerHTML = ""
            finalAmountElem.innerHTML = ""
        }
    }

    if (startAmount != "" &&
        sellPrice != "" &&
        buyPrice != "" &&
        fee !="") {
        finalAmount = startAmount * difference

        if (finalAmount < 1) {
            finalAmount = finalAmount.toFixed(8)
        } else if (finalAmount > 0 && finalAmount < 100) {
            finalAmount = finalAmount.toFixed(2)
        } else if (finalAmount >= 100) {
            finalAmount = finalAmount.toFixed(0)
        }
        finalAmountElem.innerHTML = finalAmount
    } else {
        finalAmountElem.innerHTML = ""
    }
}

function countDifference(buyPrice, sellPrice) {
    if (buyPrice != 0) {
        var difference = sellPrice / buyPrice
    }
    return difference
}
