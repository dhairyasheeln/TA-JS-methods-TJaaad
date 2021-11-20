Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
  -Parameter:separator(optionsl):- Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary.
  If omitted, the array elements are separated with a comma (",").If separator is an empty string, all elements are joined without any characters in between them.
  Return : A string with all array elements joined. If arr.length is 0, the empty string is returned.
  Example: 
  ```js
  let colors=['red','green','blue','grey','orange'];
  let join=colors.join(); //red,green,blue,grey,orange
  join=colors.join(',');//red,green,blue,grey,orange
  join=colors.join('');//redgreenbluegreyorange
  join=colors.join(' ');//red green blue grey orange
  join=colors.join(99);//red99green99blue99grey99orange
  ```
  `join:A string with all array elements joined`
  Mutation:No mutation

3. `flat`:
  -Parameter:depth(Optional).The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
  -Return: A new array with the sub-array elements concatenated into it.
  -Example:
  ```js
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat()); // expected output: [0, 1, 2, 3, 4]
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  console.log(arr2.flat(2));// expected output: [0, 1, 2, [3, 4]]
  ```
`flat:The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.`
mutation:no Mutation.
4. `push`
-Parameter: elementN:- The element(s) to add to the end of the array.
-Return: The new length property of the object upon which the method was called.
-Example: 
```js
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')
console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
let arr=[1,2,3];
let p=arr.push(true,'Dhairya',24);//
console.log(p);//6
console.log(arr);//([1, 2, 3, true, 'Dhairya', 24]
```
`push:The push() method adds one or more elements to the end of an array and returns the new length of the array.`
Mutation:Yes it mutates orignal array.

5. `indexOf`
-Parameter: searchElement:- Element to locate in the array.
fromIndex Optional:- The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).4
-Return: The first index of the element in the array; -1 if not found.
-Example: 
```js
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```
`indexOf:The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.`
Mutation:No 

6. `lastIndexOf`
-Parameter:searchElement:- Element to locate in the array.
fromIndex Optional:-The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
Return Value:The last index of the element in the array; -1 if not found.
-Example:
```js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```
`lastIndex:The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.`
-Mutation-Does not mutate


7. `includes`
-Parameter:searchElementThe value to search for.
fromIndex Optional:The position in this array at which to begin searching for searchElement.Defaults to 0.
-Return:A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified.
-Example:
```js
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
```
`includes: The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.`
-Mutation:Does not mutate


8. `reverse`
  -Parameter:No parameter
  -Return:The reversed array.
  -Example:
  ```js
  const a = [1, 2, 3];
  console.log(a); // [1, 2, 3]
  a.reverse();
  console.log(a); // [3, 2, 1]
  ```
  `reverse:The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.`
  -Mutation:yes it mutates orignal array

9. `every`
-Parameter:
*callbackFn:-A function to test for each element, taking three arguments:
*element-The current element being processed in the array.
*index Optional-The index of the current element being processed in the array.
*array Optional-The array every was called upon.
*thisArg Optional-A value to use as this when executing callbackFn.
-Return:true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
-Example:
```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

function isSubset(array1, array2) {
  // returns true if array2 is a subset of array1

  return array2.every(function (element) {
    return array1.includes(element);
  });
}

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```
`every:`
-Mutation:No mutation

10. `shift`
-Parameter- No Parameter
-Return-returns the removed element.undefined if the array is empty.
-Example:
```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```
-Mutation:Yes it mutates

11. `splice`
-Parameter:
start,deleteCount(optional),item1, item2, ... (optional)
-Return:An array containing the deleted elements.If no elements are removed, an empty array is returned.
-Example:Check on link
-Mutaion:Yes mutates

12. `find`
-Parameter:
*callbackFn-Function to execute on each value in the array, taking 3 arguments:
*element-The current element in the array.
*index Optional-The index (position) of the current element in the array.
*array Optional-The array that find was called on.
*thisArg Optional-Object to use as this inside callbackFn.
-Return:
The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
-Example:
```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }
```
-Mutation-No mutation

13. `unshift`
-Parameter:elementN:The elements to add to the front of the arr.
-Return:The new length property of the object upon which the method was called.
-Example:
```js
let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]

let arr = [1, 2]

arr.unshift(0)               // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1)          // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3])        // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5])  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```
-Mutation:Yes mutates

14. `findIndex`
-Parameter:
*callbackFn-Function to execute on each value in the array, taking 3 arguments:
*element-The current element in the array.
*index Optional-The index (position) of the current element in the array.
*array Optional-The array that find was called on.
*thisArg Optional-Object to use as this inside callbackFn.
-Return:The index of the first element in the array that passes the test. Otherwise, -1.
-Example:
```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```
Mutation:No 
15. `filter`
-Parameter:
*callbackFn-Function to execute on each value in the array, taking 3 arguments:
*element-The current element in the array.
*index Optional-The index (position) of the current element in the array.
*array Optional-The array that find was called on.
*thisArg Optional-Object to use as this inside callbackFn.
-Return:A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.


16. `flat`:Already mentioned

17. `forEach`
-Parameter-
*callbackFn-Function to execute on each value in the array, taking 3 arguments:
*element-The current element in the array.
*index Optional-The index (position) of the current element in the array.
*array Optional-The array that find was called on.
*thisArg Optional-Object to use as this inside callbackFn.
-Return Value:undefined
-Example:
```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
`forEach:The forEach() method executes a provided function once for each array element.`
-Mutation-No mutation

18. `map`
-Parameter-
*callbackFn-Function to execute on each value in the array, taking 3 arguments:
*element-The current element in the array.
*index Optional-The index (position) of the current element in the array.
*array Optional-The array that find was called on.
*thisArg Optional-Object to use as this inside callbackFn.
-ReturnValue:New array of the same size of the orignal array with each element being the result of the callback function.
-Example:
```js
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
`map:The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.`
Mutation-No mutation

19. `pop`
-Parameter:No parameter
-Return: The removed element from the array; undefined if the array is empty.
-Example:
```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

```
-Mutation:Yes it mutates

20. `reduce`
-Parameter:
*callbackFn-Function to execute on each value in the array, taking 3 arguments:
*element-The current element in the array.
*index Optional-The index (position) of the current element in the array.
*array Optional-The array that find was called on.
*thisArg Optional-Object to use as this inside callbackFn.
*Accumulator
*Initial Value

21. `slice`
-ParameterLStarIndex and EndIndex
-Return:A new array containing the extracted elements.
-Mutation:No

22. `some`:Similar to every but results to true if atleast one of the elements of array returns true when passed to callback function.
