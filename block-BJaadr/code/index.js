// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  let len=got.houses.reduce(allPep,0);
  function allPep(acc,cv)
  {
    return acc+cv.people.length;
  }
  return len;
}

function peopleByHouses() {
let pepHouse= got.houses.reduce(pepByHouse,{});
  function pepByHouse(acc,cv)
  {
    acc[cv.name]=cv.people.length;
    return acc;
  } 
  return pepHouse;
}




function everyone() {
  let allPeople=got.houses.reduce(function (acc,house)
  {
   acc=acc.concat(house.people.map((person)=>person.name));
   return acc;
  },[]);
  return allPeople;
}

function nameWithS() {
  let mapacc=[];
  return got.houses.reduce(function (acc,house){
  mapacc=(house.people.map((person)=>person.name));
  acc=acc.concat(mapacc.filter((personName)=>personName.toLowerCase().includes('s')));
  mapacc=[];
  return acc;
  },[]);
}

function nameWithA() {
  let temp=[];
  let nameA=got.houses.reduce(function(acc,house){
    temp=house.people.map(function(person){
      return person.name;
    });
    acc=acc.concat(temp.filter(function(name){
      return name.toLowerCase().includes('a');
    }));
    temp=[];
    return acc;
  },[])
  return nameA;
}

function surnameWithS() {
  let temp=[];
  return got.houses.reduce(function(acc,house){
  temp=house.people.map((person)=>person.name);
  acc=acc.concat(temp.filter(function(name){
    return name.split(' ')[1].includes('S');
  }));
  return acc;
  },[]);

}

function surnameWithA() {
  let temp=[];
  return got.houses.reduce(function(acc,house){
  temp=house.people.map((person)=>person.name);
  acc=acc.concat(temp.filter(function(name){
    return name.split(' ')[1].includes('A');
  }));
  return acc;
  },[]);
}

function peopleNameOfAllHouses() {
  let temp=[];
  return got.houses.reduce(function(acc,house){
  temp=house.people.map((person)=>person.name);
  acc[house.name]=temp;
  temp=[];
  return acc
  },{})
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
