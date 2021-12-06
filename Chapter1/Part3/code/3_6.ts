class Employee3_6 extends Person3_5{
  increasePay(percent: number){ // Employee를 위한 increasePay()메서드를 구현함.
    console.log(`Increasing the salary of ${this.name} by ${percent}%`);
  }
}

class Contractor3_6 extends Person3_5{
  increasePay(percent: number){ // Contracte를 위한 increasePay() 메서드를 구현
    console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
  }
}