function add2(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult2(add2(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add2;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;


addAndHandle(1, 2, (result) => {
  console.log(result);
});

addAndHandle(2, 6, (result) => {
  alert(`Your result is ${result}`);
});

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('An error occurred!', 500);


let foo:Function;
console.log(foo);