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
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }
  set mostRecentReport(value) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d2', []);
accounting.describe();
accounting.addReport('First Report');
accounting.addReport('Second Report');
accounting.mostRecentReport = '';
accounting.mostRecentReport = 'Foo';
console.log(accounting.mostRecentReport); // -> 'Foo'

accounting.printReports();

