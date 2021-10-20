"use strict";
// const names: Array<string> = []
// const promise : Promise<string> = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('This is done')
//    })
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Emma', hobbies: ['Sports'] }, { age: 16 });
const mergedObj2 = merge({ name: 'Emma' }, { age: 16 });
console.log(mergedObj.age);
function countAndDesc(element) {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDesc(['HI there', 'Yeah']));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
