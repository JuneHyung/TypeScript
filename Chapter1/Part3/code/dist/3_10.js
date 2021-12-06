class ProductService3_10 {
    getProducts(product) {
        if (typeof product === 'number') {
            console.log(`Getting the product info for id ${product}`);
            return { id: product, description: 'great product' };
        }
        else if (typeof product === 'string') {
            console.log(`Getting product with description ${product}`);
            return [{ id: 123, description: 'blue jeans' }, { id: 789, description: 'blue jeans' }];
        }
        else {
            return {
                id: -1,
                description: 'Error: getProducts() accept only number or string as args'
            };
        }
    }
}
const prodService3_10 = new ProductService3_10();
console.log(prodService3_10.getProducts(123));
console.log(prodService3_10.getProducts('blue jeans'));
