const user = {
    username : "Ziyad",
    id: 999,
 
    WelcomeMessage : function() {
         console.log(`Welcome to ${this.username}` );
        console.log(this);
        
    }
}
// user.WelcomeMessage()
// user.username = "Anas"
// user.WelcomeMessage()
//console.log(this);   // OUTPUT :  {}


const one = () => {    //  Arrow function  syntax
    let username = "Ali"
    console.log(this);
    
}
//one()

// let  addTwo = (num1 , num2) => {
//     return num1 + num2

//}

// let  addTwo = (num1 , num2) =>  num1 + num2

let  name = (num1 , num2) =>  ({name : "Ziyad"}) 
console.log(name());

// Object return karna ho to () => ({})    
// Warna undefined aata hai

let  addTwo = (num1 , num2) =>  (num1 + num2)   //  use react 

console.log(addTwo(2,4));


//  this object me kaam karta hai
//  Arrow function ka this nahi hota
//  Node me global this = {}
//  Arrow function short hota hai
//  Object method → normal function use karo