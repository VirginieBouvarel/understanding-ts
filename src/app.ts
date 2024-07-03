class Department {
  protected id: string;
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

// const accounting = new Department('d1', 'Accounting');
// accounting.describe();
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
// accounting.printEmployeesInformation();

// accounting.employees[2] = 'Anna'; // ERROR
// accounting.printEmployeesInformation();


class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); // paramètres passés au constructeur de Department
		this.admins = admins; 
  }

  describe() {
		console.log(`Department ${this.name} (${this.id}): ${this.admins.length} admins`);
	}
}

const it = new ITDepartment('d1', ['Max']);
it.describe();
// it.addEmployee('Max');
// it.addEmployee('Jil');
// it.printEmployeesInformation();

// console.log(it);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d2', []);
accounting.describe();
// accounting.addReport('First Report');
// accounting.addReport('Second Report');
// accounting.printReports();