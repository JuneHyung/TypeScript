function padLeft2_8(value: string, padding: string | number):string{
    if(typeof padding === 'number'){
        return Array(padding + 1).join('') + value;
    }
    if(typeof padding === 'string'){
        return padding + value;
    }
}

// console.log(padLeft2_8('Hello World', true)) // 컴파일오류