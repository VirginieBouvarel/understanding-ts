function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplateTitle(title: string, anchorId: string) {
  console.log('TITLE FACTORY');
  return function(constructor: any) {
    console.log('Rendering title');
    const anchorElement = document.getElementById(anchorId);
    const instance = new constructor();
    if (anchorElement) {
      anchorElement.innerHTML = title;
      anchorElement.querySelector('h1')!.textContent = instance.name;
    }
  }
}

@Logger('Logging person...')
@WithTemplateTitle('<h1>The Person Object is available</h1>', 'app')
class Person2 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// const pers = new Person2();
// console.log(pers);
