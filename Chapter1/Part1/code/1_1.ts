function getFinalPrice(price: number, discount: number){ // 함수 인자에 타입정의.
    return price - price/discount;
}

console.log(getFinalPrice(100, 10)); // 올바른 호출
// console.log(getFinalPrice(100, '10%')); // 잘못된 호출