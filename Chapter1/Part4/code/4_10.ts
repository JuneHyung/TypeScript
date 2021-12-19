// 4_10.ts
interface Comparator4_10<T> {
  compareTo(value: T):number; // compareTo메서드는 하나의 파라미터 타입을 가집니다.
}

// class Rectangle4_10 implements Comparator4_10<Rectangle4_10> {
//   compareTo(value: Rectangle4_10): number{
//       // 이곳에 사각형 비교 알고리즘 작성
//   }
// }

// class Triangle4_10 implements Comparator4_10<Triangle4_10>{
//   compareTo(value: Triangle4_10): number{
//       // 이곳에 삼각형 비교 알고리즘 작성
//   }
// }