interface MotorVehicle3_17{
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelate(speed: number);
  hank(HowLong: number): void;
}

class Car3_17 implements MotorVehicle3_17{
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
interface Flyable3_17{
  fly(howHigh: number);
  land();
}

interface Swimmable3_17{
  swim(howFar: number);
}

// class SecretServiceCar3_17 extends Car3_17 implements Flyable3_17, Swimmable3_17{
//   // flyable과 swimmable 내 모든 메서드를 구현
// }