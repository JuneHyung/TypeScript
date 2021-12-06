class ProductService3_9{
    // 허용가능한 메서드들을 선언
    getProducts();
    getProducts(id: number);

    // 메서드를 구현
    getProducts(id?: number){ // 오류발생 -> getProducts()메서드는 1개 파라미터를 가짐.
      typeof id === 'number' ? console.log(`Getting the product info for ${id}`) : console.log(`Getting all Products`)
    }
  }
  
  const prodService = new ProductService3_9();
  prodService.getProducts(123);
  prodService.getProducts();