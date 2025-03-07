"use strict";
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const newPrices = prices.map((num) => {
    return { price: num.toFixed(2), salePrice: (num / 2).toFixed(2) };
});
console.log('newPrices:', newPrices);
const formattedPrices = prices.map((num) => {
    const formatPrice = `$${num.toFixed(2)}`;
    return formatPrice;
});
console.log(formattedPrices);
