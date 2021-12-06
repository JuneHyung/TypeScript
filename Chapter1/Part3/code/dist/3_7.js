class Person3_7 {
    constructor(name) {
        this.name = name;
    }
    ;
    changeAddress(newAddress) {
        console.log(`Changing address to ${newAddress}`);
    }
    giveDayOff() {
        console.log(`Giving a day off to ${this.name}`);
    }
    promote(percent) {
        this.giveDayOff();
        this.increasePay(percent); // 추상메서드 호출
    }
}
class Employee3_7 extends Person3_7 {
    increasePay(percent) {
        console.log(`Increasing the salary of ${this.name} by ${percent}%`);
    }
}
class Contractor3_7 extends Person3_7 {
    increasePay(percent) {
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
    }
}
const workers3_7 = []; // 서브 클래스 타입을 배열로 선언.
workers3_7[0] = new Employee3_7('John');
workers3_7[1] = new Contractor3_7('Mary');
workers3_7.forEach(worker => worker.promote(5)); // 각 객체마다 promote() 실행
