enum Direction4_4 {
  FtoC,
  CtoF,
}

function convertTemperature4_4(temp: number, fromTo: Direction4_4): number{
  return Direction4_4.FtoC === fromTo ? ((temp-32)*5.0) / 9.0 : (temp * 9.0) / 5.0 + 32;
}
console.log(`70F is ${convertTemperature4_4(70, Direction4_4.FtoC)}C`);
console.log(`21C is ${convertTemperature4_4(21, Direction4_4.CtoF)}F`);
