// 클래스로 선언하고 name 프로퍼티를 추가.

// Dog클래스는 sayHello(): string 메서드를 가짐
// Fish클래스는 dive(howDeep: number): string메서드를 가짐
// 타입 Pet을 이용해 Dog와 Fish의 유니온 타입으로 선언.
// talkToPet(pet: Pet):string함수는 타입가드를 사용해 Dog클래스면 sayHello, Fish면 'Fish cannot talk, sry'를 출력
// talkToPet()의 파라미터를 Dog, Fish, 그외 객체로 총 3번 호출함.

class Dog{
    constructor(readonly name: string){};
    sayHello():string{
        return 'Hello Dog!'
    }
}

class Fish{
    constructor(readonly name: string){};
    dive(howDeep: number): string{
        return `${howDeep}만큼 다이빙!`
    }
}

type Pet= Dog | Fish;

function talkToPet(pet: Pet): string{
    let result = '';
    pet instanceof Dog ? result = pet.sayHello() : result = 'Fish cannot talk sry';
    return result;
}

const DogClass = new Dog('Gae');
const FishClass = new Fish("Nimo");

console.log(talkToPet(DogClass));
console.log(talkToPet(FishClass));