class Employee3_6 extends Person3_5 {
    increasePay(percent) {
        console.log(`Increasing the salary of ${this.name} by ${percent}%`);
    }
}
class Contractor3_6 extends Person3_5 {
    increasePay(percent) {
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
    }
}
