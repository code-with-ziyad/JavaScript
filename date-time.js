// let d = new Date();
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());

 ////////////////////////////////////////////////////////////////////////////////////

// let d = new Date();

// let year = d.getFullYear();
// let month = d.getMonth() + 1; 
// let date = d.getDate();

// console.log(year, month, date);

///////////////////////Age calculator///////////////////////////////////////////////


let dob = new Date("2005-06-01");
let now = new Date();

let diff = now.getTime() - dob.getTime();
let age = diff / (1000 * 60 * 60 * 24 * 365);

console.log("Age:", Math.floor(age));

