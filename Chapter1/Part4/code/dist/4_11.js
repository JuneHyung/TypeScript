// Rectangle타입인 Comparator를 구현하는 클래스를 생성
class Rectangle4_11 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    compareTo(value) {
        return this.width * this.height - value.width * value.height;
    }
}
const rect1 = new Rectangle4_11(2, 5);
const rect2 = new Rectangle4_11(2, 3);
rect1.compareTo(rect2) > 0 ? console.log('rect1 is bigger') :
    rect1.compareTo(rect2) == 0 ? console.log('rectangles are equal') :
        console.log('rect1 is smaller'); // 사각형 비교. (타입을 T에서 Rectangle로 변경)
// Programmer타입인 Comparator를 구현하는 클래스를 생성함.
class Programmer4_11 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    ;
    compareTo(value) {
        return this.salary - value.salary;
    }
}
const prog1 = new Programmer4_11('John', 20000);
const prog2 = new Programmer4_11('Alex', 30000);
prog1.compareTo(prog2) > 0 ? console.log(`${prog1.name} is richer`) :
    prog1.compareTo(prog2) === 0 ?
        console.log(`${prog1.name} and ${prog1.name} earn the same amounts`) :
        console.log(`${prog1.name} is poorer`);
