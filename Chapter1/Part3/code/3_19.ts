interface MotorVehicle3_19{
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelate(speed: number);
  hank(HowLong: number): void;
}

interface Flyable3_19 extends MotorVehicle3_19{
  fly(howHigh: number);
  land();
}