function calcTax(state, income, dependents) {
    if (state === 'NY')
        return income * 0.06 - dependents * 500;
    else if (state === 'NJ')
        return income * 0.05 - dependents * 300;
}
// let tax:number = calcTax('NJ', 50000, 'two'); // Type Error
// let tax:string = calcTax('NJ', 50000, 'two');  // Error
// console.log(tax);
