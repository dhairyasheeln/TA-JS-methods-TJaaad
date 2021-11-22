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

// Create an array peopleName and store value of sex key from persons array
let peopleName=persons.map((person)=>person.name);
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map((person)=>person.grade);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array

let peopleSex=persons.map((person)=>person.sex);
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
persons.forEach(startsWith);
function startsWith(person)
{
  if(person.name.startsWith('J') || person.name.startsWith('P'))
  {
    console.log(person.name);
  }
}


// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
persons.forEach(startsWithAC);
function startsWithAC(person)
{
  if(person.name.startsWith('A') || person.name.startsWith('C'))
  {
    console.log(person.name,person.name.length);
  }
}
// Log all the filtered male ('M') in persons array
console.log("................................Male.........................................")
persons.forEach(male);
function male(person)
{
  if(person.sex==='M')
  {
    console.log(person);
  }
}
// Log all the filtered female ('F') in persons array
console.log("................................Female........................................");
persons.forEach(female);
function female(person)
{
  if(person.sex==='F')
  {
    console.log(person);
  }
}
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log("female ('F') whose name starts with 'C' or 'J'");
persons.forEach(startsWith);
function startsWith(person)
{
  if(person.name.startsWith('C') || person.name.startsWith('J'))
  {
    if(person.sex==='F')
    {
      console.log(person);
    }
  }
}
// Log all the even numbers from peopleGrade array
peopleGrade.forEach(function(grade)
{
  if(grade%2===0)
  {
    console.log(grade);
  }
});
// Find the first name that starts with 'J' in persons array and log the object
let firstNameJ=persons.find(function(person)
{
  return person.name.startsWith('J');
});
console.log(firstNameJ);
// Find the first name that starts with 'P' in persons array and log the object
let firstNameP=persons.find(function(person)
{
  return person.name.startsWith('P');
});
console.log(firstNameP);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let firstNameFilter=persons.find(function(person)
{
  return person.name.startsWith('J') && person.grade>10 && person.sex==='F';
});
console.log(firstNameFilter);
// Filter all the female from persons array and store in femalePersons array
let femalePersons=persons.filter(function(person){
  return person.sex==='F';
});
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons=persons.filter(function(person){
  return person.sex==='M';
});
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let sumGrades=persons.reduce(function (acc,cv)
{
  return acc+cv.grade;
},0
);
console.log(sumGrades);
// Find the average grade
let avgGrades=persons.reduce(function (acc,cv,index,arr)
{
  return acc+cv.grade;
},0
);
console.log(avgGrades/persons.length);
// Find the average grade of male
let avgGradM=malePersons.reduce(function(acc,cv,index,arr){
  return acc+cv.grade;
},0);
console.log(avgGradM/persons.length);
// Find the average grade of female
let avgGradF=femalePersons.reduce(function(acc,cv,index,arr){
  return acc+cv.grade;
},0);
console.log(avgGradF/persons.length);
// Find the highest grade
let highestGrade=[...peopleGrade].sort((a,b)=>a-b).pop();
console.log(highestGrade);
// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b)=>a-b);
console.log(peopleGrade);
//Yes it got changed
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=>b-a);
console.log(peopleGrade);
//Yes it got changed
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b)=>b-a);
console.log([...peopleGrade]);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
console.log(peopleName);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();
console.log([...peopleName]);
