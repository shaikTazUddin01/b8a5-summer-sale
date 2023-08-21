function productPrice(productId) {
    const price = document.getElementById(productId);
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString)
    return priceNumber;
}

function productList(productName) {
    const productEntry = document.getElementById('addShoppingProduct')
    const count = productEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-xl')
    p.classList.add('mb-2')
    p.innerHTML = `${count + 1}. ${productName}`;
    productEntry.appendChild(p);

}


function totalPrice(price) {
    const element = document.getElementById('totalPrice');
    const totalPrice = element.innerText;
    const totalPriceElementNumber = parseFloat(totalPrice);
    const sumOfTotal = totalPriceElementNumber + price;
    element.innerText = sumOfTotal.toFixed(2);

    if (sumOfTotal >= 200) {
        document.getElementById('couponApply').removeAttribute('disabled');

    }

}
function total() {
    // total price
    const element = document.getElementById('totalPrice');
    const totalPrice = element.innerText;
    const totalPriceElementNumber = parseFloat(totalPrice);

    const totalsum = document.getElementById('total');

    const totalSumOfAll = totalPriceElementNumber.toFixed(2);
if(totalSumOfAll>=0){
    const totalsum=document.getElementById('sumOftotal')
    totalsum.removeAttribute('disabled')
}
    totalsum.innerText = totalSumOfAll;

    return totalSumOfAll;

}
function couponApply() {
    // coupon
    const coupon = document.getElementById('totalDiscount');
    const couponString = coupon.innerText;
    // const couponNumber = parseFloat(couponString).toFixed(2);

    const element = document.getElementById('totalPrice');
    const totalPrice = element.innerText;
    const totalPriceElementNumber = parseFloat(totalPrice);

    // total
    const totalsum = document.getElementById('total');

    const couponField = document.getElementById("couponField");
    const couponValue = couponField.value;

    if (couponValue === "SELL200") {
        const discountPrice = (totalPriceElementNumber * 20 / 100);

        const discountelement = document.getElementById('totalDiscount');

        discountelement.innerText = discountPrice.toFixed(2);

        const sumofTotal=parseFloat(totalPriceElementNumber - discountPrice)
        const sumofTotalToFixed=sumofTotal.toFixed(2)
        totalsum.innerText = sumofTotalToFixed;
    } else (
        alert("This is not a valid coupon")
    )
}
// K. Accessories area
// K. Accessories
function KitchenwareProductIdOne() {
    const price = productPrice('KitchenwareProductIdOneprice');
    totalPrice(price)
    productList('K. Accessories')

    total()
}
// K. Accessories
function KitchenwareProductIdTwo() {
    const price = productPrice('KitchenwareProductIdTwoprice');
    totalPrice(price)
    productList('K. Accessories')
    total()
}
// Home Cooker
function KitchenwareProductIdThree() {
    const price = productPrice('KitchenwareProductIdthreeprice');
    totalPrice(price)
    productList('Home Cooker')
    total()
}

// Sportswear area

// Sports Back Cap
function sportswearProductIdOneprice() {
    const price = productPrice('sportswearProductIdOneprice');
    totalPrice(price)
    productList('Sports Back Cap')
    total()
}
// Full Jersey Set
function sportswearProductIdTwoprice() {
    const price = productPrice('sportswearProductIdTwoprice');
    totalPrice(price)
    productList('Full Jersey Set')
    total()
}
// Sports cates
function sportswearProductIdThreeprice() {
    const price = productPrice('sportswearProductIdThreeprice');
    totalPrice(price)
    productList('Sports cates')
    total()
}