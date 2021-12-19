// 4_7.ts
class Person4_7 {
}
class Employee4_7 extends Person4_7 {
}
class Animal4_7 {
}
const workers4_7 = []; // 파라미터를 가진 제네릭 타입을 선언.
// 배열에 객체 추가
workers4_7[0] = new Person4_7();
workers4_7[1] = new Employee4_7();
// workers4_7[2] = new Animal4_7(); // 컴파일 오류
