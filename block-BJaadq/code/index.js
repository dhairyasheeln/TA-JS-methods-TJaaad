// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  let count=0;
 for(let house of got.houses)
 {
   for(let people of house.people)
   {
    count++;
   }
 }
 return count;
}


function peopleByHouses() {
  let pepHouse={};
  for(let house of got.houses)
  {
    let count=0;
    for(let people of house.people)
    {
      count++;
    }
    pepHouse[house.name]=count;
  }
  return pepHouse;
  
}

function everyone() {
  let peopleName=[];
  for(let house of got.houses)
  {
    for(let people of house.people)
    {
      peopleName.push(people.name);
    }
  }
  return peopleName;
}

function nameWithS() {
  let peopleNameWithS=[];
  for(let house of got.houses)
  {
    for(let people of house.people)
    {
      if(people.name.toLocaleLowerCase().includes('s'))
      {
        peopleNameWithS.push(people.name);
      }
    }
  }
  return peopleNameWithS;
}

function nameWithA() {
  let peopleWithA=[];
  for(let house of got.houses)
  {
    for(let people of house.people)
    {
      if(people.name.toLocaleLowerCase().includes('a'))
      {
        peopleWithA.push(people.name);
      }
    }
  }
  return peopleWithA;
}

function surnameWithS() {
  let temp=[];
  let peopleSurnameWithS=[];
  for(let house of got.houses)
  {
    for(let people of house.people)
    {
      temp=people.name.split(' ');
      if(temp[1].startsWith('S'))
      {
        peopleSurnameWithS.push(people.name);
      }
      temp=[];
    }
  }
  return peopleSurnameWithS;
}

function surnameWithA() {
  let temp=[];
  let peopleSurnameWithA=[];
  for(let house of got.houses)
  {
    for(let people of house.people)
    {
      temp=people.name.split(' ');
      if(temp[1].startsWith('A'))
      {
        peopleSurnameWithA.push(people.name);
      }
      temp=[];
    }
  }
  return peopleSurnameWithA;
}

function peopleNameOfAllHouses() {
  let housePeople={};
  let peopName=[];
  for(let house of got.houses)
  {
    for(let people of house.people)
    {
      peopName.push(people.name);
      housePeople[house.name]=peopName;
    }
    peopName=[];
  }
  return housePeople;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
