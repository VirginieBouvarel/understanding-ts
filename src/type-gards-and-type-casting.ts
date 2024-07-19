type Admin2 = {
  name: string;
  privileges: string[];
}

type Employee2 = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee2 = Admin & Employee;

const employee3: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable2 = string | number;

type UnknownEmployee = Employee2 | Admin2;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ('startDate' in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmployeeInformation(employee3);
printEmployeeInformation({name: 'Eliott', privileges: ['ux-ui']});

class Car {
  drive() {
    console.log('driving...');
  }
}

class Truck {
  drive() {
    console.log('driving a truck...');
  }
  loadCargo(amount: number) {
    console.log(`Loading Cargo... ${amount}`);
  }
}

type Vehicule = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicule) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
    speed = animal.flyingSpeed;
    break;
    case 'horse':
    speed = animal.runningSpeed;
  }
  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });


const userInputElement = document.getElementById('user-input') as HTMLInputElement;
if (userInputElement) {
  userInputElement.value = 'Hi there!';
}



