// type addFn = (a:number, b: number) => number;
interface addFn {
   (a: number, b: number): number;
}

interface Named {
   readonly name?: string;
   outputName?: string
}

interface Greetable extends Named {
   greet(phrase: string): void
}

class Person implements Greetable {
   name?: string;
   age = 30

   constructor(n?: string) {
      this.name = n
   }

   greet(phrase: string) {
      if (this.name) {
         console.log(phrase + ' ' + this.name)
      }
      else {
         console.log("Hi")
      }
   }
}

let user1: Greetable;
let user2: Person;

user1 = new Person('Max')
user2 = new Person()

user1.greet('Hi there, I am')
user2.greet('Hi there, I am')