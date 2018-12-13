var mainElem = document.getElementById("main"),
    buyPriceElem = document.getElementById("buyPriceJs"),
    sellPriceElem = document.getElementById("sellPriceJs"),
    differenceElem = document.getElementById("differenceJs"),
    startAmountElem = document.getElementById("startAmountJs"),
    finalAmountElem = document.getElementById("finalAmountJs");

mainElem.oninput = function () {
    var startAmount = startAmountElem.value,
        buyPrice = buyPriceElem.value,
        sellPrice = sellPriceElem.value,
        difference = document.getElementById("differenceJs").value

    if (sellPrice != "" &&
        buyPrice != "") {
        var difference = countDifference(buyPrice,
                                         sellPrice);
        differenceElem.innerHTML = difference.toFixed(4);

        if (startAmount != "") {
            finalAmount = startAmount * difference
            finalAmountElem.innerHTML = finalAmount
        } else {
            finalAmountElem.innerHTML = ""
        }
    } else {
        differenceElem.innerHTML = ""
        finalAmountElem.innerHTML = ""
    }
}

function countDifference(buyPrice, sellPrice) {
    if (buyPrice != 0) {
        var difference = sellPrice / buyPrice
    }
    return difference
}
