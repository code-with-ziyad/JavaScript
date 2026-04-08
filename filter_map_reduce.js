let arrNums = [1,2,3,4,5,6,7,8,9];

// let newNums = arrNums.filter( (num) => 5 < num )
// console.log(newNums);


let newNums = arrNums.filter( (num) => {
   return 5 < num  
})
//console.log(newNums);


const books =  [
   {
    name: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    edition: "1st",
    year: 2008,
    price: 2500,
    category: "Programming"
  },

   {
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    edition: "3rd",
    year: 2018,
    price: 2200,
    category: "Programming"
  },

   {
    name: "You Don’t Know JS",
    author: "Kyle Simpson",
    edition: "2nd",
    year: 2020,
    price: 3000,
    category: "JavaScript"
  },

   {
    name: "Clean Code",
    author: "Robert C. Martin",
    edition: "1st",
    year: 2008,
    price: 2800,
    category: "Software Engineering"
  },

  {
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    edition: "3rd",
    year: 2009,
    price: 5000,
    category: "Algorithms"
  },

   {
    name: "HTML & CSS",
    author: "Jon Duckett",
    edition: "1st",
    year: 2011,
    price: 2000,
    category: "Web Development"
  },

 {
    name: "Learning Python",
    author: "Mark Lutz",
    edition: "5th",
    year: 2013,
    price: 3500,
    category: "Programming"
  },

   {
    name: "Java: The Complete Reference",
    author: "Herbert Schildt",
    edition: "11th",
    year: 2018,
    price: 4000,
    category: "Programming"
  },

  {
    name: "Data Structures and Algorithms",
    author: "Narasimha Karumanchi",
    edition: "1st",
    year: 2011,
    price: 3200,
    category: "DSA"
  },

   {
    name: "Computer Networks",
    author: "Andrew S. Tanenbaum",
    edition: "5th",
    year: 2010,
    price: 3800,
    category: "Networking"
  },

  {
    name: "Operating System Concepts",
    author: "Silberschatz",
    edition: "9th",
    year: 2012,
    price: 4200,
    category: "Operating Systems"
  },

   {
    name: "Artificial Intelligence",
    author: "Stuart Russell",
    edition: "3rd",
    year: 2016,
    price: 4500,
    category: "AI"
  }
];


////////////////////////// Searching Books /////////////////////////////////////////////////

 let bookName = books.filter( (bk) => bk.category === "Networking")

 bookName = books.filter( (bk) =>{
    return bk.year >=  2010 && 
    bk.category === "Programming"
})
// console.log(bookName);
 

///////////////////// All books total price calculate //////////////////////////////////////

let myTotal = books.reduce(function (acc, curval) {
   // console.log(`acc: ${acc} and current value ${curval.price}`);
   return acc + curval.price

},0)

// console.log(myTotal);

//////////////////////////////////// Maps ///////////////////////////////////////////////////////////

 let learnMaps = [1,2,3,4,5,6];
 let newValues = learnMap.map( (learnMap) => learnMap * 10 )
// console.log(newValue);

////////////////////////////////Nested Map ///////////////////////////////////////////////////

let learnMap = [1,2,3,4,5,6];

let newValue = learnMap.map
   ( (learnMap) => learnMap * 10 ).map( (item) => item + 10 ).filter( (item) => item > 30)

console.log(newValue);




// map()

// Array ke har element ko transform karta hai
// New array return karta hai (same length)
// Original array change nahi hota

//  filter()

// Condition ke base par elements select karta hai
// New array return karta hai (length kam ho sakti hai)
// True wale elements hi milte hain

// reduce() 

// Array ko ek single value me convert karta hai
// Total, sum, average, object banana me use hota hai

// Accumulator use karta hai
