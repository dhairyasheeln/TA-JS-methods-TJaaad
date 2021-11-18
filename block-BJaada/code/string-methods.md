Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.



2. `toUpperCase`
   -Parameter: No parameter.
   -Return: It returns a new string converted into uppercase.
   -Example: 
   ```js
  'My name is Dhairyasheel'.toUpperCase();
  //'MY NAME IS DHAIRYASHEEL'
  let user="David";
  user.toUpperCase();
  //'DAVID'
   ```
   -`toUpperCase` returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).


3. `toLowerCase`
  -Parameter:No Parameter
  -Return: A new string representing the calling string converted to lower case.
  -Example:
  ```js
  "HELLO WORLD".toLowerCase();
  //'hello world'
  let user="John"
  user.toLowerCase();
  `ToLowerCase` converts string to lowercase.
  //'john'
  ```
4. `trim`
-Parameter: No parameter.
-Return value: It returns new string with whitespace removed from both its beginning and end.
If neither the beginning or end of the string has whitespaces,it still returns a new string(essentially copy of orignal string),
with no exception being thrown.
-Example:
```js
let temp="    Tmp   ";
let trim=temp.trim();
trim // 'Tmp'
"  I am a student   ".trim()
'I am a student'
let no_space="No Spaces"
let no_trim=no_space.trim();
no_trim // 'No Spaces'
`trim` : to remove the whitespaces from both the end of the string.
```
5. `trimEnd`
-Parameter: No parameter.
-Return:It returns a new string removing the whitespaces from the end of string.If the end has no whitespaces it still returns a new string(copy of the first string).
-Example:
```js
const greeting = '   Hello world!   ';
greeting.trimEnd();//"   Hello world!"
let temp="    Tmp   ";
let trimEnd=temp.trimEnd();
trimEnd// '    Tmp'
let noEndSpaces="   tmp"
let noTrimEnd=noEndSpaces.trimEnd();
noEndSpaces
'   tmp'
noTrimEnd
'   tmp'
`trimEnd` The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
```

6. `trimStart`
-Parameter:No parameter.
-Return:It returns a new string removing the whitespaces from the start of string.If the string has no whitespaces at the start it still returns a new string(copy of the first string).
-Example:
```js
const greeting = '   Hello world!   ';
console.log(greeting.trimStart());//'Hello world!   '
let temp="    Tmp   ";
let trimStart=temp.trimStart();
trimEnd// 'Tmp   '
let noStartSpaces="tmp   "
let noTrimStart=noStartSpaces.trimStart();
undefined
noStartSpaces
'tmp   '
noTrimStart
'tmp   '
`trimStart: The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
`
```
7. `concat`
-Parameter: It accepts one or more strings to concat to str.
-Return: A new string containing the combined text of the strings provided.
-Example:
```js
const str1 = 'Hello';
const str2 = 'World';
const str3="From AltCampus";
str1.concat(str2);//'HelloWorld'
str1.concat(" ",str2);//'Hello World'
str3.concat(" ",str1," ",str2);//'From AltCampus Hello World'
const str=str1.concat();
str//'Hello'
```
`concat:The concat() method concatenates the string arguments to the calling string and returns a new string.`


8. `endsWith`
-Parameter: searchString (Mandatory): The characters to be searched for at the end of string.
length(Optional) : If provided, it is used as the length of str. Defaults to str.length.
-Return: true if the given characters are found at the end of the string; otherwise, false.
-Example: 
```js
let str = 'To be, or not to be, that is the question.'
str.endsWith('question.')//true
str.endsWith('questioN.')//false
str.endsWith('to be')//false
str.endsWith('to be', 19)//true
let temp='012345';
temp.endsWith('45');//true
temp.endsWith('34');//false
temp.endsWith('34',5);//true
```
`endsWith:This method lets you determine whether or not a string ends with another string. This method is case-sensitive.`


9. `includes`
-Parameter: searchString(Mandatory):A string to be searched for within str.
position(Optional):The position within the string at which to begin searching for searchString. (Defaults to 0.)
-Return: true if the search string is found anywhere within the given string; otherwise, false if not.
-Example:
```js
'Blue Whale'.includes('Blue') //true
let brand="Altcampus";
let tagLine="We at Altcampus train as per industry standards";
tagLine.includes(brand)//true
tagLine.includes(brand,6)//true
tagLine.includes(brand,7)//false
```
`includes:This method lets you determine whether or not a string includes another string.This method performs a case-sensitive search.`


10. `indexOf`
-Parameter : searchValue : The string value to search for.
If no string is explicitly provided, searchValue will be coerced to "undefined", and this value will be searched for in str.
So, for example: 'undefined'.indexOf() will return 0, as undefined is found at position 0 in the string undefined.
'undefine'.indexOf() however will return -1, as undefined is not found in the string undefine.
fromIndex(Optional)An integer representing the index at which to start the search. Defaults to 0.
For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.
For example, 'hello world'.indexOf('o', -5) will return 4, as it starts at position 0, and o is found at position 4. On the other hand, 'hello world'.indexOf('o', 11) (and with any fromIndex value greater than 11) will return -1, as the search is started at position 11, a position after the end of the string.
-Example: 
```js
'My name is dhairya'.indexOf('dhairya');//11
'My name is dhairya'.indexOf('dhairya',12);//-1
'undefined'.indexOf();//0
'My name is dhairya'.indexOf('dhairya',-2);//11
'My name is dhairya'.indexOf('ya',17);//-1
```
`indexOf:method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.`

11. `lastIndexOf`:Similar to IndexOf , gives the index of the lastoccurence.

12. `padEnd`
-Parameter:
targetLength:The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
padString(Optional):The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " 
-Return: A String of the specified targetLength with the padString applied at the end of the current str.
-Example:
```js
let str="Altcampus";
str.padEnd(9,'*');//Altcampus
str.padEnd(10,'*');//Altcampus*
str.padEnd(11,'*');//Altcampus**
str.padEnd(10,'*#');//Altcampus*
str.padEnd(11,'*#');//'Altcampus*#'

```
13. `padStart`:Similar to pasEnd except paddign will be done from the start.
14. `repeat`
-Parameter:count:An integer between 0 and +Infinity, indicating the number of times to repeat the string.
-Return: A new string containing the specified number of copies of the given string.
-Example:
```js
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError
```
`repeat:The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.`

15. `replace`
-Parameter: 
regexp (pattern):Regular expression
substr:A String that is to be replaced by newSubstr.
newSubstr (replacement):The String that replaces the substring specified by the specified regexp or substr parameter.
replacerFunction (replacement):A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. 
-Return:A new string, with some or all matches(replaceAll) of a pattern replaced by a replacement.
-Example:
```js
let user='Dhairya';
let newuser='Dhairyasheel';
let sen='Dhairya is my name';
sen.replace(user,newuser);
'Dhairyasheel is my name'
sen='Dhairya is my name.Dhairya'
sen.replace(user,newuser);
'Dhairyasheel is my name.Dhairya'
sen.replaceAll(user,newuser);
'Dhairyasheel is my name.Dhairyasheel'
```
`replace`:This method does not change the calling String object. It returns a new string.

16. `slice`
-Parameter:beginIndex:The zero-based index at which to begin extraction.
endIndex Optional:The zero-based index before which to end extraction. The character at this index will not be included.
-Return:A new string containing the extracted section of the string.
Example
```js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
```
17. `split`:
-Parameter:separator Optional:The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.
limit Optional:A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.
The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
If limit is 0, [] is returned.


18. `substring`:Similar to slice with some advantages ove slice
