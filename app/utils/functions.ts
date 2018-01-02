// argument types
export const sum = (n1: number, n2: number): number => n1 + n2;
sum(2, 3);
// sum(2, '3');

// void
/* tslint:disable */
export const sayHello = (n1: number, n2: number): void => console.log('Hello');
/* tslint:enable */
