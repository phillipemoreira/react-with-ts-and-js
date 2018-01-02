// argument types
export const sum = (n1: number, n2: number): number => n1 + n2;
sum(2, 3);
// sum(2, '3');

// void
/* tslint:disable */
export const sayHello = (): void => console.log('Hello');
/* tslint:enable */
sayHello();

// function types
let mySum: (a: number, b: number) => number;
mySum = sum;
// mySum = () => 'foo';
mySum(2, 4);
