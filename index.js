// Given an array of numbers, compute and print the total s
const nums = [5, 10, 15, 20];
const totalSum=nums.reduce((acc,curr)=>{
    acc+=curr
return acc
},0)
console.log(totalSum)