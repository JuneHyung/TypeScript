interface ProductProperties3_12{ // ProductProperties는 두 개의 선택적 파라미터를 가짐
  id?: number,
  description?: string;
}

class Product3_12{
  id: number;
  description: string;
  constructor(properties?: ProductProperties3_12){
    // 클래스 생성자는 ProductProperties 타입인 선택적 파라미터를 가짐.
    // 이곳에 생성자를 구현
  }
}