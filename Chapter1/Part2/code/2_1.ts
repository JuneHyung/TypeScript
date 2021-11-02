const ord = Symbol('orderId');
const myOrder = { // 객체프로퍼티로 Symbol사용하기
    ord:"123"
}
console.log(myOrder['ord']); // 123 출력됨.