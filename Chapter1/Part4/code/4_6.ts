enum ProductsActionTypes4_6 {
  Search = 'Products Search', // Search 멤버를 초기화함.
  Load = 'Products Load All', // Load 멤버 초기화
  LoadFailure = 'Products Load All Failure', // LoadFailure 멤버를 초기화 함.
  LoadSuccess = 'Products Load All Success', // LoadSuccess 멤버를 초기화.
}

console.log(ProductsActionTypes4_6.LoadFailure); // 'Products Load All Failure'출력함.