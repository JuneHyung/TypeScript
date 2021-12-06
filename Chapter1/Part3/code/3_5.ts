abstract class Person3_5{
  constructor(public name: string){};
    changeAddress(newAddress: string){
      console.log(`Changing address to ${newAddress}`);
    }

    giveDayOff(){
      console.log(`Giving a day off to ${this.name}`);
    }

    promote(percent: number){
      this.giveDayOff();
      this.increasePay(percent); // 추상메서드 호출
    }
    
    abstract increasePay(percent: number): void; // 추상 메서드를 선언
}