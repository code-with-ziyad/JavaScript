/////////////QUESTION NO1/////////////////////////////////////

let items = ["Milk", "Bread", "Eggs"];
let newItems = items.join(" | ");
console.log(newItems);

/////////////////////QUESTION NO2/////////////////////////////////////

let names = ["Ziyad", "Ali", "Umer"];

let newName = names.join(" -> ");

console.log(newName);


/////////////////////QUESTION NO3/////////////////////////////////////

let num = [2, 4, 6, 8];
 let newNums = num.map(n => n*2 );
 console.log(newNums);
 
 /////////////////////QUESTION NO4/////////////////////////////////////

let students = ["Hamza", "Usman", "Zaid"];
let newStudents = students.map(s => "Mr." + s);
console.log(newStudents);

 /////////////////////QUESTION NO5/////////////////////////////////////

 let number = [1,2,3,4,5,6,7,8];
 let newsNumbers = number.filter(numbers => numbers % 2 === 0);
 console.log(newsNumbers);

  /////////////////////QUESTION NO6/////////////////////////////////////

 let ages = [12, 17, 18, 22, 15, 30];
let adults = ages.filter(a => a >= 18);
console.log(adults);

  /////////////////////QUESTION NO7/////////////////////////////////////

 let team = ["Ali", "Hassan", "Ibrahim"];
 team.forEach( t => {
console.log("hello " + t );
 })

  /////////////////////QUESTION NO8/////////////////////////////////////

let add = [5, 10, 15];
let sum = 0;
add.forEach(n => sum += n);
console.log(sum);


  /////////////////////QUESTION NO9/////////////////////////////////////

let numbers = [1,2,3,4,5,6];
let newNumbers = numbers.filter(numbers => numbers % 2 ===0)
let finalNum = newNumbers.map(n => n * 2);
console.log(finalNum);

  /////////////////////QUESTION NO#10/////////////////////////////////////

let cities = ["Karachi", "Lahore", "Islamabad"];
let modify = cities.map(c => "City: "+ c  );
let finalCity = modify.join(", ");
console.log(finalCity);

