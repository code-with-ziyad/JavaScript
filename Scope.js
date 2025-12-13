const  a = 100;
let b = 200;
var c  = 300;


if (true) {
    const  a = 10;
    let b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);   //OUTPUT: 30 ;


function one() {
    const userName = "Ziyad";
//    console.log(website);  // parent apne child se value nhi lesakta  // error
   
function two(){
    let website = "ziyad@gmail.com";
    console.log(userName);
}

// two()
}
// one()

console.log(addone(5))

function addone(num){
    return num + 1;
}
// function keyword se direct function banate hain

// Function call pehle bhi ho sakta hai

// JavaScript is function ko memory me upar le jati hai

// Is process ko Hoisting kehte hain ✅

const addtwo = function(num) {
    return num + 2;
}
console.log(addtwo(8))

// Function ko variable ke andar store karte hain

// function ek value ban jata hai

// Call hamesha baad me hota hai

// Isme hoisting nahi hoti ❌

// ❌ Agar upar call karoge to error aayega:
