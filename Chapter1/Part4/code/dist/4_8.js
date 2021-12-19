// 4_8.ts
class Person4_8 {
}
class Employee4_8 extends Person4_8 {
}
class Animal4_8 {
}
const workers4_8 = []; // 파라미터를 가진 제네릭 타입을 선언.
// 배열에 객체 추가
workers4_8[0] = new Person4_8();
workers4_8[1] = new Employee4_8();
workers4_8[2] = new Animal4_8(); // 오류가 없음
