class Product3_11{
  id: number;
  description: string;
  constructor(); // 생성자 선언 내 파라미터가 없음. (생성자 선언)
  constructor(id: number); // 생성자 선언 내 한개의 파라미터가 있음. (생성자 선언)
  constructor(id: number, description: string); // 2개의 파라미터가 있음. (생성자 선언)
  constructor(id?: number, description?: string){
    // 이곳에 생성자를 구현
    // 모든 가능한 파리미터를 다루는 생성자를 구현 (생성자 선언)
  }
}