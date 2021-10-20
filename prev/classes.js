"use strict";
class Department {
    constructor(id, n) {
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReports(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccDepartment('1', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Maxx');
console.log(employee1, Department.fiscalYear);
const ITDept = new ITDepartment('2', ['Emmanuel']);
ITDept.addEmployee('Max');
ITDept.addEmployee('Manu');
ITDept.printEmployeeInfo();
console.log(ITDept);
// const accounting = new AccDepartment('1', []);
const accounting = AccDepartment.getInstance();
accounting.addReports('Somethin went wrong...');
accounting.getReports();
accounting.describe();
console.log(accounting);
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Year End Report";
