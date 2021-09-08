// number, string, boolean, null, undefined, symbol
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

// object
const obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

// obj = {
//     name: 'james',
//     age : 1,
// };

obj.name = 'james';
console.log('---------------------');
console.log(obj.name);
console.log(obj2.name);




