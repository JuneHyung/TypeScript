let person2: unknown;

person2 = JSON.parse(`{"address":"25Broadway"}`);

console.log(person2.address); // 컴파일 오류 발생