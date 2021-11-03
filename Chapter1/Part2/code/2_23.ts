// 2_23.ts
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle'; 
	radius: number;
}

type Shape = Rectangle | Circle; // union