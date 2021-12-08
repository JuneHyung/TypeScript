class Product3_22{
  id: number;
  description: string;
}
class MockProductService3_22{
	getProducts(): Product3_22[]{
    // 하드 코딩된 제품 정보를 받는 코드 작성.
    return [];
  }
  getProductById(id: number): Product3_22{
    return {id: 456, description: 'Not a real product'};
  }
}

/*
class MockProductService3_22 implements ProductService3_22{
  // 이곳에구현
}
*/