class Product3_21 {
}
class ProductService3_21 {
    getProducts() {
        // 모든 products 정보를 가져옴.
        return [];
    }
    getProductById(id) {
        // id를 조회해 product의 정보를 가져옴.
        return { id: 123, description: 'Good product' };
    }
}
const productService = new ProductService3_21();
const products = productService.getProducts();
