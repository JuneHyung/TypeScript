class ProductService3_9 {
    // 메서드를 구현
    getProducts(id) {
        typeof id === 'number' ? console.log(`Getting the product info for ${id}`) : console.log(`Getting all Products`);
    }
}
const prodService = new ProductService3_9();
prodService.getProducts(123);
prodService.getProducts();
