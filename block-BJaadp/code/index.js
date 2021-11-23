let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let summation=persons.reduce(sum,0);
function sum(acc,cv)
{
  return acc+cv.grade;
}
let avg=summation/persons.length;
console.log(avg);
// Find the average grade of male
let countM=0;
let summationMale=persons.reduce(sumM,0);
function sumM(acc,cv)
{
  if(cv.sex==='M')
  {
    countM++;
    return acc+cv.grade;
  
  }
  else{
    return acc;
  }
}
let avgM=summationMale/countM;
console.log(avgM);
// Find the average grade of female
let countF=0;
let summationFemale=persons.reduce(sumF,0);
function sumF(acc,cv)
{
  if(cv.sex==='F')
  {
    countF++;
    return acc+cv.grade;
  }
  else{
    return acc;
  }
}
let avgF=summationFemale/countF;
console.log(avgF);
// Find the highest grade
let highestGrade=persons.sort((a,b)=>a.grade-b.grade).pop();
console.log(highestGrade.grade);
// Find the highest grade in male
highestGrade=persons.sort(compare).pop();
console.log(highestGrade.grade);
function compare(a,b)
{
  let arr=[];
  if(a.sex==='M')
  {
    arr.push(a.grade);
  }
  if(b.sex==='F')
  {
    arr.push(b.grade);
  }

}
// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj={};
fruitBasket.forEach(createObj);
function createObj(ele)
{
  let cnt=0;
  for(let i=0;i<fruitBasket.length;i++)
  {
    if(ele===fruitBasket[i])
    {
      cnt++;
    }
  
  }
  fruitsObj[ele]=cnt;
}
console.log(fruitsObj);




/* 



Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/


// let fruitsArr=[];
// fruitBasket.forEach(createObj);
// function createObj(ele)
// {
//   let cnt=0;
//   for(let i=0;i<fruitBasket.length;i++)
//   {
//     if(ele===fruitBasket[i])
//     {
//       cnt++;
//     }
  
//   }
//   fruitsArr[0]=cnt;
// }
// console.log(fruitsObj);



const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];
let empty=[];
let arr=dataTwo.reduce(flatten,empty);
function flatten(acc,cv)
{
  for(let i=0;i<cv.length;i++)
  {
    empty.push(cv[i]);
   
  }
}

console.log(empty);

// Using reduce flat dataTwo array

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
function increment(num)
{
  return num+1;
}

function double(num)
{
  return num*2;
}
function decrement(num)
{
  return num-1;
}
function triple(num)
{
  return num*3
}
function half(num)
{
  return Math.round(num/2);
}
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let result=pipeline.reduce(operations,3);
function operations(acc,cv)
{
  acc=cv(acc);
  return acc;
}
console.log(result);


let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
result=pipeline2.reduce(operations,8);
function operations(acc,cv)
{
  acc=cv(acc);
  return acc;
}
console.log(result);
