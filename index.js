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

//Given th9e sales records, how much sales amount was there in each region?
const sales = [
	{ region: 'North', amount: 100 },
	{ region: 'South', amount:  80 },
	{ region: 'North', amount: 120 },
	{ region: 'East',  amount:  75 },
	{ region: 'South', amount:  20 }
]

// expected result:
// { North: 220, South: 100, East: 75 }
const salesRecord=sales.reduce((acc,curr)=>{
  acc[curr.region]=(acc[curr.amount]||0) +curr.amount
return acc
},{})
console.log(salesRecord)

//  Given the string `'mississippi'`, how many times does each character appear?
    
    
    // expected result:
    // { m: 1, i: 4, s: 4, p: 2 }
const str="mississippi"
const strArray=str.split("")
const countstrCharacters=strArray.reduce((acc,curr)=>{
acc[curr]=(acc[curr] || 0)+1
return  acc
},{})
console.log(countstrCharacters) 


// Given an array. Return only the users who are active.
const users1 = [
  { name: 'Anjali', active: true },
  { name: 'Raj', active: false },
  { name: 'Meena', active: true }
];

// Expected Output
// ["Anjali", "Meena"]
const activeUser=users1.filter(user=>user.active).map(user=>user.name)
console.log(activeUser)

//You are given a list of volunteers and the number of hours they contributed to an event. Return an object of volunteers who contributed more than 8 hours in total.

const participation = [
  { name: 'Rahul', hours: 6 },
  { name: 'Neha', hours: 4 },
  { name: 'Ankit', hours: 3 },
  { name: 'Rahul', hours: 5 },
  { name: 'Neha', hours: 2 },
  { name: 'Anjali', hours: 9 }
];

// Expected Output:
// {
//   Rahul: 11,
//   Anjali: 9
// }
const partcipantsObj=participation.reduce((acc,curr)=>{
  acc[curr.name]=(acc[curr.name]||0)+curr.hours
return acc
},{})
console.log(partcipantsObj)
const partcipantsObjArray=Object.keys(partcipantsObj)
const requiredArray=partcipantsObjArray.reduce((acc,curr)=>{
  if(partcipantsObj[curr]>8){
    acc[curr]=partcipantsObj[curr]
  }
  return acc
},{})
console.log(requiredArray)

// Given an array. Return executives whose total sales amount is more than 7000.
const sales1 = [
  { executive: 'Rohit', amount: 5000 },
  { executive: 'Sneha', amount: 4000 },
  { executive: 'Rohit', amount: 3000 },
  { executive: 'Sneha', amount: 1000 },
  { executive: 'Arjun', amount: 6000 }
];
const salesPersonObject=sales1.reduce((acc,curr)=>{
acc[curr.executive]=(acc[curr.executive]||0)+curr.amount
return acc
},{})
console.log(salesPersonObject)
const salesPersonObjectKeys=Object.keys(salesPersonObject)
const salesMoreThan8000=salesPersonObjectKeys.reduce((acc,curr)=>{
  if(salesPersonObject[curr]>7000){
    acc[curr]=salesPersonObject[curr]
  }
  return acc
},{})
console.log(salesMoreThan8000)

// Expected Output
// {
//   Rohit: 8000
// }