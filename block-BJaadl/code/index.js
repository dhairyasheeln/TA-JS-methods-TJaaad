let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];


// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let largest=[...words].sort((a,b)=>a.length-b.length).pop();
console.log(largest);


// - Convert the above array "words" into an array of length of word instead of word.
let arrLength=words.map((word)=>word.length);
console.log(arrLength);
// - Create a new array that only contains word with atleast one vowel.
let arrVowel=words.filter(checkVowel);
function checkVowel(word)
{
  switch(true)
  {
    case word.includes('a'):
    case word.includes('e'):
    case word.includes('i'):
    case word.includes('o'):
    case word.includes('u'):
      return true;
    default:return false;

  }
}
console.log(arrVowel);
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sum=0;
function sumArray(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    sum+=arr[i];
  }
  return sum;
}
console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyThree=numbers.map((num)=>num*3);
console.log(multiplyThree);
// - Create a new array that contains only even numbers
let arrEven=numbers.filter((num)=>num%2===0);
console.log(arrEven);
// - Create  a new array that contains only odd numbers.
let arrOdd=numbers.filter((num)=>num%2!==0);
console.log(arrOdd);
// - Create a new array that should have true for even number and false for odd numbers.
let checkEvenOdd=numbers.map((num)=>num%2===0);
console.log(checkEvenOdd);
// - Sort the above number in assending order.
console.log([...numbers].sort((a,b)=>a-b));
// - Does sort mutate the original array?
//yes it mutates the orignal array
// - Find the sum of the numbers in the array.
let Arradd=numbers.reduce(function (acc,cv){
  return acc+cv;
},0);
console.log(Arradd);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let avg=0;
sum=0;
function findAvg(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    sum+=arr[i];
  }
  return sum/arr.length
}
console.log(findAvg(numbers));

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
sum=0;
function averageWordLength(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    sum+=arr[i].length;
  }
  return sum/arr.length;
}
console.log(averageWordLength(strings));
