// type AddFunction = (a: number, b: number) => number;
interface AddFunction {
  (a: number, b: number): number;
}
let adding: AddFunction;
adding = (n1: number, n2: number) => n1 + n2;



interface Named {
  readonly name?: string;
  outputname?: string;

  optionalMethod?(): any;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 30;
  
  constructor( n: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;
user1 = new Person('Max');

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// }; // Objet Person valide

user1.greet('Hi there - I am'); // -> Hi there - I am Max
console.log(user1);
// Tout objet devant être Greetable doit posséder un name, un age et une méthode greet.