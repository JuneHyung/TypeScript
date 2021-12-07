interface MotorVehicle3_20{
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelate(speed: number);
  hank(HowLong: number): void;
}

interface Flyable3_20 extends MotorVehicle3_20{
  fly(howHigh: number);
  land();
}

interface Swimmable3_20{
  swim(howFar: number);
}


class SecretServiceCar3_20 implements Flyable3_20, Swimmable3_20{
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
  hank(howLong: number): void{
    console.log(`Beep Beep!!`)
  }
  fly(howHigh: number){
    console.log(`Flying ${howHigh} feet high`);
  }
  land(){
    console.log(`Landing. Fasten your belts`);
  }
  swim(howFar: number){
    console.log(`Swimming ${howFar} feet`);
  }
}