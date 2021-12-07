interface MotorVehicle3_14{
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelate(speed: number);
  hank(HowLong: number): void;
}

class Car3_14 implements MotorVehicle3_14{
  startEngine(): boolean{
    return true;
  }
  stopEngine(): boolean{
    return true;
  }
  brake(): boolean{
    return true;
  }
  accelate(speed: number){
    console.log(`Driving faster`);
  }
  hank(HowLong: number): void {
    console.log(`Beep beep yeah!`);
  }
}

// const car = new Car3_14();
const car: Car3_14 = new Car3_14();
car.startEngine();