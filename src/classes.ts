abstract class Department {
  static fiscalYear = 2020;
  protected id: string;
	public name: string = 'DEFAULT';
  private employees: string[] = [];

	constructor(id: string, name: string) {
    this.id = id;
		this.name = name;
    // console.log(Department.fiscalYear);
	}
  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(): void;

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
		console.log(`${this.name} Department (${this.id}): ${this.admins.length} admins`);
	}
}

const it = new ITDepartment('d1', ['Max', 'Julie']);
it.describe();
// it.addEmployee('Max');
// it.addEmployee('Jil');
// it.printEmployeesInformation();

// console.log(it);

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  private lastReport: string;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    // On vérifie si on a déjà une instance de AccountingDepartment
    // Si oui on la retourne directement
    if (this.instance) return this.instance;
    // Si non on en crée une
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
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

  describe() {
    console.log(`Accounting Department : ${this.reports.length} reports`);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.describe();
accounting.addReport('First Report');
accounting.addReport('Second Report');
// accounting.mostRecentReport = '';
accounting.mostRecentReport = 'Foo';
console.log(accounting.mostRecentReport); // -> 'Foo'

accounting.printReports();

const employee1 = Department.createEmployee('max');
console.log(employee1, Department.fiscalYear); // -> { name: 'max' } 2020
