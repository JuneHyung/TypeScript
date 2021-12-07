interface MotorVehicle3_16{
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelate(speed: number);
  hank(HowLong: number): void;
}
interface Flyable3_16{
  fly(howHigh: number);
  land();
}

interface Swimmable3_16{
  swim(howFar: number);
}

// class Car3_16 implements MotorVehicle3_16, Flyable3_16, Swimmable3_16{

// }