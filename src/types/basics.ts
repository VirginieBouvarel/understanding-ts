function add(n1: number, n2: number, longText: boolean, phrase: string) {
  const result = n1 + n2;
  if (longText) {
    return phrase + result;
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const withLongText = true;
let resultPhrase = 'Result is: ';

add(number1, number2, withLongText, resultPhrase);