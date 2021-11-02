//2_6.ts, 2_7
function padLeft2_6(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join('') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'");
}
// 2_7
console.log(padLeft2_6('Hello World', 4)); // Hello World 반환
console.log(padLeft2_6('Hello World', 'John says')); // John says Hello World
console.log(padLeft2_6('Hello World', true)); // 런타임 오류 발생
