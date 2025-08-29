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
