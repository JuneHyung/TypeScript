interface MotorVehicle3_18{
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelate(speed: number);
  hank(HowLong: number): void;
}

class Car3_18 implements MotorVehicle3_18{
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
interface Flyable3_18{
  fly(howHigh: number);
  land();
}

interface Swimmable3_18{
  swim(howFar: number);
}

// class SecretServiceCar3_18 implements MotorVehicle3_18, Flyable3_18, Swimmable3_18{
//   // 3가지 인터페이스 내 모든 메서드를 구현
// }