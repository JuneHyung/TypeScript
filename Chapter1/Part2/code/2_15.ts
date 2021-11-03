class Block {
    readonly nonce: number; // 생성자 내부에 초기화 된 프로퍼티
    readonly hash: string;
    constructor (
        readonly index: number, // 초기화 중 프로퍼티 값이 생성자로 전달됨
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string
    ){
        const {nonce, hash} = this.mine(); // 반환된 객체를 구조 분해 구문으로 상수 선언
        this.nonce = nonce;
        this.hash = hash;
    }
    // 생략
}