// const names: Array<string> = []; // string[]
// names[0].split(' '); -> possible seulement sur des strings

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// })

function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: 'Max' }, { age: 30 }) ; 
// console.log(mergedObject.age);

const mergedObject2 = merge({ name: 'Max' }, { hobbies: ['football', 'basket'] });
// console.log(mergedObject2.hobbies);S


interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value.';
  if (element.length > 0) {
    description = `Got ${element.length} element${element.length > 1 ? 's' : ''}.`;
  }
  return [element, description];
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['sport', 'cinéma']));
// console.log(countAndDescribe(10));

function extractAndConvert<T extends {}, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({ age: 30 }, 'age'));
// console.log(extractAndConvert({ age: 30 }, 'name'));
// console.log(extractAndConvert({}, 'name'));


class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
console.log(textStorage.getItems());
textStorage.addItem('Max');
console.log(textStorage.getItems());
textStorage.addItem('Manu');
console.log(textStorage.getItems());
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
console.log(numberStorage.getItems());
numberStorage.addItem(345);
console.log(numberStorage.getItems());
numberStorage.addItem(258);
console.log(numberStorage.getItems());
numberStorage.removeItem(258);
console.log(numberStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Manu'];
// names.push('Anna');