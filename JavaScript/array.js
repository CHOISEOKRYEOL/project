'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (const fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach( (fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to end
fruits.push('딸기','복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('딸기','복숭아');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('딸기','복숭아','레몬');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '사과', '수박');
console.log(fruits);

// combine two arrays
const fruits2 = ['망고','밤'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf("코코넛"));

// includes
console.log(fruits.includes('수박'));
console.log(fruits.includes("코코넛"));

// lastindexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));

fruits.join();
console.log(fruits);

fruits.reverse();
console.log(fruits);










