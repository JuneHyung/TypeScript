function paddingLeft2_9(value: string, padding: string | number): string{
    if(typeof padding === 'number') return Array(padding+1).join('')+value;
    if(typeof padding === 'string') return padding + value;
    else return padding; // else블록은 실행안됨.
}