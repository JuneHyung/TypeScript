// 4_7.ts
class Person4_7{ // Person 클래스 선언
  name: string;
}
class Employee4_7 extends Person4_7{ // Person의 서브 클래스 선언
  department: number;
}
class Animal4_7{ // Animal클래스를 선언
  breed: string;
}
const workers4_7: Array<Person4_7> = []; // 파라미터를 가진 제네릭 타입을 선언.

// 배열에 객체 추가
workers4_7[0] = new Person4_7();
workers4_7[1] = new Employee4_7();
// workers4_7[2] = new Animal4_7(); // 컴파일 오류