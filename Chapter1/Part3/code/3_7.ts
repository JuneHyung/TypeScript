abstract class Person3_7{
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

class Employee3_7 extends Person3_7{
  increasePay(percent: number){ // Employee를 위한 increasePay()메서드를 구현함.
    console.log(`Increasing the salary of ${this.name} by ${percent}%`);
  }
}

class Contractor3_7 extends Person3_7{
  increasePay(percent: number){ // Contracte를 위한 increasePay() 메서드를 구현
    console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
  }
}


const workers3_7: Person3_7[] = []; // 서브 클래스 타입을 배열로 선언.

workers3_7[0] = new Employee3_7('John');
workers3_7[1] = new Contractor3_7('Mary');

workers3_7.forEach(worker => worker.promote(5)); // 각 객체마다 promote() 실행