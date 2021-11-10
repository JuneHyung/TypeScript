type Person2_25 ={
    address: string;
}

let person1: any;

person1 = JSON.parse(`{"adress":"25Broadway"}`);

console.log(person1.address); // undefined 출력