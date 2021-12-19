// 4_11.ts
interface Comparator4_11<T> { // 제네릭 인터페이스 Comparator 선언
  compareTo(value: T):number; 
}

// Rectangle타입인 Comparator를 구현하는 클래스를 생성
class Rectangle4_11 implements Comparator4_11<Rectangle4_11> { 
  
  constructor(private width: number, private height: number){ };
  
  compareTo(value: Rectangle4_11): number{ // 사각형을 비교하는 메서드를 구현.
  return this.width * this.height - value.width * value.height;
  }
}


const rect1:Rectangle4_11 = new Rectangle4_11(2, 5);
const rect2:Rectangle4_11 = new Rectangle4_11(2, 3);

rect1.compareTo(rect2) > 0 ? console.log('rect1 is bigger') :
rect1.compareTo(rect2) == 0 ? console.log('rectangles are equal') :
  console.log('rect1 is smaller'); // 사각형 비교. (타입을 T에서 Rectangle로 변경)

// Programmer타입인 Comparator를 구현하는 클래스를 생성함.
class Programmer4_11 implements Comparator4_11<Programmer4_11>{
  
  constructor(public name: string, private salary: number){ };
  
  compareTo(value: Programmer4_11): number{ // 프로그래머를 비교하는 메서드 구현
  return this.salary - value.salary;
  }
}

const prog1: Programmer4_11 = new Programmer4_11('John', 20000);
const prog2: Programmer4_11 = new Programmer4_11('Alex', 30000);

prog1.compareTo(prog2) > 0 ? console.log(`${prog1.name} is richer`) :
prog1.compareTo(prog2) === 0 ? 
    console.log(`${prog1.name} and ${prog1.name} earn the same amounts`) :
  console.log(`${prog1.name} is poorer`);
