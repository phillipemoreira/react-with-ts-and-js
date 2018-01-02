// Sample types, commented lines would make compiler fail.

// Strings ---------------

// Implicit
let myName = 'Alfred';
// myName = 2;

// Explict
let myNameExplicit: string;
myName = 'Hitchcock';
// myName = 2;

// Numbers ---------------

// Implicit
let myAge = 27;
// myAge = '28';

// Explict
let myAgeExplicit: number;
myAgeExplicit = 28;
// myAgeExplicit = '29';

// Arrays ---------------

// Implicit
let hobbies = ['programming', 'swimming'];
// hobbies = [2];

// Explict
let hobbiesExplicit: string[];
hobbiesExplicit = ['programming', 'swimming'];
// hobbiesExplicit = [2];

// Any
let hobbiesAny: any[];
hobbiesAny = ['programming', 'swimming'];
hobbiesAny = [2];

// Tuples ---------------
let address: [string, number] = ['foo street', 123];
address = ['dummy street', 123];
// address = [123, 'dummy street'];

// Enums ---------------
// Apparently we cannot collect coverage as babylon (js parser used in the coverage calculation)
// understands enum as a reserved keywork.

enum Color {
  blue,
  yellow = 100,
  red,
}
let myColor: Color = 100;

// Any ---------------
let car: any = 'BMW';
car = { name: 'foo', age: 23};
