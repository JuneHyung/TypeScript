// 2_13.ts
type Patient2_13 = {
    name: string;
    height: Foot; // Foot타입 별칭 사용
    weight: Pound ; // Pound타입 별칭 사용
}

let patient2_13: Patient2_13= { // 객체 리터럴 표기법을 사용해 인스턴스 만듬.
    name: 'Joe Smith',
    height: 5,
}