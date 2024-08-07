// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   }
// }

// function WithTemplateTitle(title: string, anchorId: string) {
//   console.log('TITLE FACTORY');
//   return function<T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) { // décorateur

//     return class extends originalConstructor { // qui retourne une nouvelle classe
//       constructor(..._args: any[]) {
//         super(); // basée sur le constructeur de la classe porteuse

//         console.log('Rendering title'); // et ajoutant une logique supplémentaire
//         const anchorElement = document.getElementById(anchorId);
//         if (anchorElement) {
//           anchorElement.innerHTML = title;
//           anchorElement.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     }
//   }
// }

// @Logger('Logging person...')
// @WithTemplateTitle('<h1>The Person Object is available</h1>', 'app')
// class Person2 {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const pers = new Person2();
// console.log(pers);

// function Log(target: any, propertyName: string | Symbol) {
//   console.log('Property decorator!');
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Accessor decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log('Method decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log('Parameter decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }


//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// function Autobind(_target: any, _name: string, descriptor: PropertyDescriptor) {
//   const originalDescriptor = descriptor.value;
//   const newDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return originalDescriptor.bind(this);
//     }
//   };
//   return newDescriptor;
// }

// class Printer {
//   message = 'This works!';

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();
// const button = document.querySelector('button');
// button!.addEventListener('click', p.showMessage);


/**
 * Validation de champs de formulaire avec des décorateurs de propriétés
 */

const inputsRules: { [inputName: string]: string[] } = {};

function addInputRule(inputName: string, rule: string) {
  inputsRules[inputName] = inputsRules[inputName] ? [ ...inputsRules[inputName], rule] : [rule];
}

function Required(_target: any, propertyName: string) {
  return addInputRule(propertyName, 'required');
}
function Maxlength (_target: any, propertyName: string) {
  return addInputRule(propertyName, 'maxlength');
}
function Positive (_target: any, propertyName: string) {
  return addInputRule(propertyName, 'positive');
}

const validate = (course: any) =>  
  Object.entries(inputsRules).every(([input, types]) => 
    types.every(type => 
      type === 'required' && course[input] || 
      type === 'positive' && course[input] > 0 ||
      type === 'maxlength' && course[input].length < 5
    )
  )


class Course {
  @Required 
  @Maxlength 
  title: string;

  @Required 
  @Positive 
  price: number;

  constructor(t:string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleElement = document.getElementById('title') as HTMLInputElement;
  const priceElement = document.getElementById('price') as HTMLInputElement;
  const title = titleElement.value;
  const price = +priceElement.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
})
