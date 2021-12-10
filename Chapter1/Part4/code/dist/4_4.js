var Direction4_4;
(function (Direction4_4) {
    Direction4_4[Direction4_4["FtoC"] = 0] = "FtoC";
    Direction4_4[Direction4_4["CtoF"] = 1] = "CtoF";
})(Direction4_4 || (Direction4_4 = {}));
function convertTemperature4_4(temp, fromTo) {
    return Direction4_4.FtoC === fromTo ? ((temp - 32) * 5.0) / 9.0 : (temp * 9.0) / 5.0 + 32;
}
console.log(`70F is ${convertTemperature4_4(70, Direction4_4.FtoC)}C`);
console.log(`21C is ${convertTemperature4_4(21, Direction4_4.CtoF)}F`);
