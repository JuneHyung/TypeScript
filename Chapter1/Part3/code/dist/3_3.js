class Person3_3 {
    constructor(firstname, lastName, age) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.age = age;
    } // 슈퍼클래스 Person의 생성자
}
class Employee3_3 extends Person3_3 {
    constructor(firstName, lastName, age, department) {
        super(firstName, lastName, age); // 슈퍼클래스 생성자를 호출함.
        this.department = department;
    }
}
const empl = new Employee3_3('Joe', 'Smith', 29, 'Accounting'); // 서브 클래스를 인스턴스를 생성함.
console.log(empl);
