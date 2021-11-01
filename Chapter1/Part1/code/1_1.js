function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(100, 10)); // 올바른 호출
// console.log(getFinalPrice(100, '10%')); // 잘못된 호출
