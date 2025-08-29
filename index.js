// Given an array of numbers, compute and print the total s
const nums = [5, 10, 15, 20];
const totalSum=nums.reduce((acc,curr)=>{
    acc+=curr
return acc
},0)
console.log(totalSum)

//Given an array of numbers, find the product of all elements.
const nums1 = [2, 3, 4];
const product=nums1.reduce((acc,curr)=>acc*curr,1)
console.log(product)

//Given an array, calculate the average of a numeric array.
const scores = [80, 90, 70, 100];
// expected result: 85

const numericAverage=scores.reduce((acc,curr)=>{
    acc+=curr
    return acc
},0)/scores.length
console.log(numericAverage)


//Given a two-dimensional array, flatten it by one level.
const nested = [[1, 2], [3, 4], [5]];
// expected result: [1, 2, 3, 4, 5]
const flattened=[].concat(...nested)
console.log(flattened)

//Given an array of objects, pull out the names into a new array.
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' }
];
// expected result: ['Alice', 'Bob', 'Carol']
const namesArray=users.map(user=>user.name)
console.log(namesArray)

//Given an array of strings, build an object that counts how many times each string appears.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// expected result: { apple: 3, banana: 2, orange: 1 }
const countFruits=fruits.reduce((acc,curr)=>{
acc[curr]=(acc[curr] || 0)+1
return acc
},{})
console.log(countFruits)

// Given an array of objects, group them by type property.
const pets = [
  { name: 'Spot', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rover', type: 'dog' },
  { name: 'Whiskers', type: 'cat' }
];

// expected result:
// {
//   dog: [ { name: 'Spot', type: 'dog' }, { name: 'Rover', type: 'dog' } ],
//   cat: [ { name: 'Mittens', type: 'cat' }, { name: 'Whiskers', type: 'cat' } ]
// }
const groupedArray = pets.reduce((acc, curr) => {
    if (!acc[curr.type]) {
        acc[curr.type] = [];
    }
    acc[curr.type].push(acc[curr]); 
    return acc;
}, {});

console.log(groupedArray);
