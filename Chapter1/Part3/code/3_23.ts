interface Product3_23{ // 인터페이스를 통한 커스텀 타입 선언
  id: number;
  description: string;
}

interface IProductService3_23{ // API를 인터페이스로 선언
  getProducts(): Product3_23[];
  getProductById(id: number):Product3_23;
}

class ProductService3_23 implements IProductService3_23{
  getProducts(): Product3_23[]{
    // 실제 데이터에서 제품을 받습니다.
    return [];
  }

  getProductById(id: number): Product3_23{
    // id로 제품을 조회함.
    return {id: 123, description: 'Good product'};
  }
}

/*
class MockProductService implements IProductService{
  // 메소드 구현
}
*/
