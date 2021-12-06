class Person3_5 {
    constructor(name) {
        this.name = name;
    }
    ;
    changeAddress(newAddress) {
        console.log(`Changing address to ${newAddress}`);
    }
    giveDayOff() {
        console.log(`Giving a day off to ${this.name}`);
    }
    promote(percent) {
        this.giveDayOff();
        this.increasePay(percent); // 추상메서드 호출
    }
}
