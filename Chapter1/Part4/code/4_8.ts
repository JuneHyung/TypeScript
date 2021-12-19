// 4_8.ts
class Person4_8{ // Person 클래스 선언
  name: string;
}
class Employee4_8 extends Person4_8{ // Person의 서브 클래스 선언
  department: number;
}
class Animal4_8{ // Animal클래스를 선언
  name: string; // 새로 추가됨.
  breed: string;
}
const workers4_8: Array<Person4_8> = []; // 파라미터를 가진 제네릭 타입을 선언.

// 배열에 객체 추가
workers4_8[0] = new Person4_8();
workers4_8[1] = new Employee4_8();
workers4_8[2] = new Animal4_8(); // 오류가 없음