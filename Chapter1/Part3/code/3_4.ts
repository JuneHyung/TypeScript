class Person3_4{
  constructor(public firstName: string,
    public lastName: string,
    private age: number){}

    sellStock(symbol: string, numberOfShares: number){ // 부모의 sellStock()
      console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}

class Employee3_4 extends Person3_4{
  constructor(firstName: string, lastName: string, 
    age: number, public department: string){
    super(firstName, lastName, age); // 부모 생성자 호출
  }

  sellStock(symbol: string, shares: number){ // 자식의 sellStock()
    super.sellStock(symbol, shares); // 부모에서 sellStock() 호출
    this.reportToCompliance(symbol, shares);
  }

  private reportToCompliance(symbol: string, shares: number){ // reportToCompliance()는 private 메서드
    console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
  }
}

const empl3_4 = new Employee3_4('Joe', 'Smith', 29, 'Accounting');
empl3_4.sellStock('IBM', 100); // Employee 에서 sellStock 호출.