abstract class Department {
   static fiscalYear = 2021
   protected readonly id: string
   protected name:string;
   protected employees: string[] = []

   constructor(id: string, n: string) {
      this.name = n
      this.id = id
   }

   static createEmployee(name: string){
      return {name:name}
   }

   abstract describe(this:Department) : void;
   
   addEmployee(employee:string) {
      this.employees.push(employee)
   }

   printEmployeeInfo () {
      console.log(this.employees.length)
      console.log(this.employees)
   }
}

class ITDepartment extends Department{
   private admins : string[];
   
   constructor (id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins

   }
   
   describe(){
      console.log('IT Department - ID: ' + this.id )   
   }
}

class AccDepartment extends Department{
   
   private lastReport : string;
   private static instance: AccDepartment;

   get mostRecentReport() {
      if(this.lastReport){
         return this.lastReport
      }
      throw new Error('No report found')
   }

   set mostRecentReport(value:string){
      if(!value){
         throw new Error('Please pass in a valid value!')
      }
      this.addReports(value)     
   }

   private constructor (id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0]
   }

   static getInstance(){
      if(this.instance){
         return this.instance
      }

      this.instance = new AccDepartment('1', [])
      return this.instance
   }

   describe(){
      console.log('Accounting Department - ID: ' + this.id )   
   }

   addEmployee(employee:string) {
      this.employees.push(employee)
   }

   addReports(text:string){
      this.reports.push(text)
      this.lastReport = text;
   }

   getReports() {
      console.log(this.reports)
   }
}


const employee1 = Department.createEmployee('Maxx')
console.log(employee1, Department.fiscalYear)

const ITDept = new ITDepartment('2', ['Emmanuel']);

ITDept.addEmployee('Max')
ITDept.addEmployee('Manu')

ITDept.printEmployeeInfo()
console.log(ITDept)

// const accounting = new AccDepartment('1', []);
const accounting = AccDepartment.getInstance()

accounting.addReports('Somethin went wrong...')

accounting.getReports()
accounting.describe()
console.log(accounting)

console.log(accounting.mostRecentReport)

accounting.mostRecentReport= "Year End Report"