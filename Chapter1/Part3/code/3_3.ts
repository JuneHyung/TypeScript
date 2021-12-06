class Person3_3{
  constructor(public firstname: string,
    public lastName: string,
    private age: number){}  // 슈퍼클래스 Person의 생성자
}

class Employee3_3 extends Person3_3{ // 서브클래스 Employee
  constructor(firstName: string, lastName: string,
    age: number, public department: string){ // employee 생성자
      super(firstName, lastName, age); // 슈퍼클래스 생성자를 호출함.
    }
}

const empl = new Employee3_3('Joe', 'Smith', 29, 'Accounting'); // 서브 클래스를 인스턴스를 생성함.
console.log(empl);