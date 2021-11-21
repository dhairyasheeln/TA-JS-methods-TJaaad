// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
  console.log(`Index of 101 in numbers ${numbers.indexOf(101)}`);
// - Find the last index of `9` in numbers
console.log(`Last index of 9 is ${numbers.lastIndexOf(9)}`);
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));
// - Add two new words in the strings array "called" and "sentance"
let stringClone=[...strings];
console.log(stringClone.push('called','sentence'));



// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(stringClone.join(' '));
// - Remove the first word in the array (strings)
stringClone=[...strings];
console.log('First word removed');
console.log(stringClone.shift());
// - Find all the words that contain 'is' use string method 'includes'
console.log('All the words that contain is');
for(let word of strings)
{
  if(word.includes('is'))
  {
    console.log(word);
  }
}
// - Find all the words that contain 'is' use string method 'indexOf'
for(let word of strings)
{
  if(word.indexOf('is')!==-1)
  {
    console.log(word);
  }
}
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divByThree=numbers.every(divisibleThree);
function divisibleThree(num)
{
  return num%3===0;
}
console.log(divByThree);

// -  Sort Array from smallest to largest
let numbersClone=[...numbers];
numbersClone.sort(compare);
function compare(a,b)
{
  return a-b;
}
console.log(numbersClone);
// - Remove the last word in strings
stringClone=[...strings];
console.log(stringClone.pop());
// - Find largest number in numbers
numbersClone=[...numbers];
numbersClone.sort(compare);
function compare(a,b)
{
  return a-b;
}
console.log(numbersClone[numbersClone.length-1]);
// - Find longest string in strings

// - Find all the even numbers
numbersClone=[...numbers];
let evenArr=numbersClone.filter(isEven);
function isEven(num)
{
  return num%2===0;
}
console.log(evenArr);
// - Find all the odd numbers
numbersClone=[...numbers];
let oddArr=numbersClone.filter((num)=>num%2!==0);
console.log(oddArr);
// - Place a new word at the start of the array use (unshift)
stringClone=[...strings];
stringClone.unshift('first word');
console.log(stringClone);
// - Make a subset of numbers array [18,9,7,11]
numbersClone=[...numbers];
let subArr=numbersClone.splice(numbersClone.indexOf(18),4);
console.log(subArr);
// - Make a subset of strings array ['a','collection']
stringClone=[...strings];
let subStrArr=stringClone.slice(stringClone.indexOf('a'),stringClone.indexOf('collection')+1);
console.log(subStrArr);
// - Replace 12 & 18 with 1221 and 1881
numbersClone=[...numbers];
let filArr=numbersClone.map(replace);
function replace(num,index,arr)
{
  if(num===12)
  {
    return 1221;
  }
  else if(num===18)
  {
    return 1881;
  }
  else{
    return num;
  }
}
console.log(filArr);
// - Replace words in strings array with the length of the word
stringClone=[...strings];
let arrLen=stringClone.map((string)=>string.length);
console.log(arrLen);
// - Find the sum of the length of words using above question
stringClone=[...strings];
let sum=0;
stringClone.forEach(checkLen);
function checkLen(string)
{
  sum=sum+string.length;
}
console.log(`Sum of lengths or words is ${sum}`);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.forEach(startsWithJ);
function startsWithJ(obj)
{
  if(obj.firstname.startsWith('J'))
  {
    console.log(obj.firstname)
  }
}
// - Create new array with only first name
customerClone=[...customers];
let onlyFirstName=customerClone.map((obj)=>obj.firstname);
console.log(onlyFirstName);
// - Create new array with all the full names (ex: "Joe Blogs")
customerClone=[...customers];
let fullName=customerClone.map((obj)=>obj.firstname.concat(' ',obj.lastname));
console.log(fullName);
// - Sort the array created above alphabetically
let sortArr=fullName.sort();
console.log(sortArr);
// - Create a new array that contains only user who has at least one vowel in the firstname.
customerClone=[...customers];
let vowelName=customerClone.filter(checkVowel);
function checkVowel(cust)
{
  switch(true)
  {
    case cust.firstname.includes('a'):
    case cust.firstname.includes('e'):
    case cust.firstname.includes('i'):
    case cust.firstname.includes('o'):
    case cust.firstname.includes('u'):
      return  cust; 
  }
}
console.log(vowelName);