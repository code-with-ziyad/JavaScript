console.log(Array.from({name: "Ziyad"})); 

const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [6, 7, 8, 9, 10];

const allArray = arr_1.concat(arr_2);   // 2 array ko jorta hai
// console.log(allArray);

const anotherArray = [...arr_1, ...arr_2]; // ye 2 ya 2 se zeyada arrays ko jorta hai or  ye syntax best hai array ko jorne ke leye
console.log(anotherArray);

