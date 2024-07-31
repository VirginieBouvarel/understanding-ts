// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   }
// }

// function WithTemplateTitle(title: string, anchorId: string) {
//   console.log('TITLE FACTORY');
//   return function(constructor: any) {
//     console.log('Rendering title');
//     const anchorElement = document.getElementById(anchorId);
//     const instance = new constructor();
//     if (anchorElement) {
//       anchorElement.innerHTML = title;
//       anchorElement.querySelector('h1')!.textContent = instance.name;
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

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }


  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
