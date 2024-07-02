class Department {
  private readonly id: string;
	public name: string = 'DEFAULT';
  private employees: string[] = [];

	constructor(id: string, name: string) {
    this.id = id;
		this.name = name;
	}
  describe() {
		console.log(`Department (${this.id}): ${this.name}`);
	}
  addEmployee(employee: string) {
    // this.id = 'd2';
    this.employees.push(employee);
  }
  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeesInformation();

// accounting.employees[2] = 'Anna'; // ERROR
// accounting.printEmployeesInformation();
