function convertTemperature4_3(temp, fromTo) {
    return 'FtoC' === fromTo ?
        (temp - 32) * 5.0 / 9.0 : // 화씨 -> 섭씨
        temp * 9.0 / 5.0 + 32; // 섭씨 -> 화씨
}
console.log(`70F is ${convertTemperature4_3(70, 'FtoC')}C`);
console.log(`21C is ${convertTemperature4_3(70, 'CtoF')}F`);
console.log(`35C is ${convertTemperature4_3(35, 'ABCD')}F`);
