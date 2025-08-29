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
    acc[curr.type].push(curr); 
    return acc;
}, {});

console.log(groupedArray);


//Given an array of objects, build an object keyed by a unique identifier (sku).
const products1 = [
  { sku: 'A123', name: 'Socks', price: 5 },
  { sku: 'B456', name: 'Hat', price: 15 }
];

// expected result:
// {
//   A123: { sku: 'A123', name: 'Socks', price: 5 },
//   B456: { sku: 'B456', name: 'Hat', price: 15 }
// }
const productsModel=products1.reduce((acc,curr)=>{
acc[curr.sku]=curr
    return acc
},{})
console.log(productsModel)

//Given the array of votes, calculate how many votes did each candidate receive?
const votes = [
  'Alice', 'Bob', 'Alice', 'Carol',
  'Bob', 'Alice', 'Carol', 'Bob'
];

// expected result:
// { Alice: 3, Bob: 3, Carol: 2 }
const countVotes=votes.reduce((acc,curr)=>{
  acc[curr]=(acc[curr]||0)+1
  return acc
},{})
console.log(countVotes)

//Given the array of pet objects, how many pets are there of each type?
const pets1 = [
  { name: 'Fido', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rex', type: 'dog' },
  { name: 'Whiskers', type: 'cat' },
  { name: 'Goldie', type: 'fish' }
];

// expected result:
// { dog: 2, cat: 2, fish: 1 }
const petsCount=pets1.reduce((acc,curr)=>{
acc[curr.type]=(acc[curr.type]||0 )+1
return acc
},{})
console.log(petsCount)