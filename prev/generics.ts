// const names: Array<string> = []

// const promise : Promise<string> = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('This is done')
//    })
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
   return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Emma', hobbies: ['Sports'] }, { age: 16 });
const mergedObj2 = merge({ name: 'Emma' }, { age: 16 });

console.log(mergedObj.age);

interface lengthy {
   length: number
}

function countAndDesc<T extends lengthy>(element: T): [T, string] {
   let descriptionText = 'Got no value'
   if (element.length > 0) {
      descriptionText = 'Got ' + element.length + ' elements'
   }
   return [element, descriptionText]
}

console.log(countAndDesc(['HI there', 'Yeah']))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
   return obj[key]
}

extractAndConvert({ name: 'Max' }, 'name')

class DataStorage<T extends string | number | boolean> {
   private data: T[] = []

   addItem(item: T) {
      this.data.push(item)
   }

   removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
         return;
      }
      this.data.splice(this.data.indexOf(item), 1)
   }

   getItems() {
      return [...this.data]
   }
}

const textStorage = new DataStorage<string>()

textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems())


interface CourseGoal {
   title: string;
   description: string;
   completeUntil: Date;
}

function createCourseGoal(
   title: string,
   description: string,
   date: Date
): CourseGoal {
   let courseGoal: Partial<CourseGoal> = {};
   courseGoal.title = title;
   courseGoal.description = description;
   courseGoal.completeUntil = date;
   return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
 // names.push('Manu');
 // names.pop();