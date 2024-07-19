interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};

function add3(a: number, b: number): number;
function add3(a: string, b: string): string;
function add3(a: string, b: number): string;
function add3(a: number, b: string): string;
function add3(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add3('Max', ' Schwarz');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);