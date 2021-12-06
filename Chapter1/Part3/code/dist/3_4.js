class Person3_4 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sellStock(symbol, numberOfShares) {
        console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}
class Employee3_4 extends Person3_4 {
    constructor(firstName, lastName, age, department) {
        super(firstName, lastName, age); // 부모 생성자 호출
        this.department = department;
    }
    sellStock(symbol, shares) {
        super.sellStock(symbol, shares); // 부모에서 sellStock() 호출
        this.reportToCompliance(symbol, shares);
    }
    reportToCompliance(symbol, shares) {
        console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
    }
}
const empl3_4 = new Employee3_4('Joe', 'Smith', 29, 'Accounting');
empl3_4.sellStock('IBM', 100); // Employee 에서 sellStock 호출.
