// let obj1 = new Object();  // Sinleton
let userOne = {} // Non Singleton

userOne.id = 324;
userOne.name = "Ziyad"
userOne.isLogedIn = false;

// console.log(userOne);

let anOtherUser = {
      email : "ziyad@gmail.com",
    userId : 353, 
      fullName:{
        firstName: "Ziyad",
        lastName: "Ahmed",
       }
     
}
// console.log(anOtherUser.fullName);


let obj3 = {1:"a", 2:"b"}
let obj4 = {3:"c", 4:"d"}
let obj6 = {5:"e", 6:"f"}


let obj7 = Object.assign({},obj3,obj4)
// console.log(obj5);

let obj5 = console.log({...obj3,...obj4,...obj6}) // preffer this


console.log(Object.keys(userOne));  // keys == name, id
console.log(Object.values(userOne)); // values == ziyad, 123
console.log(Object.entries(userOne)); // entries == both 

console.log(userOne.hasOwnProperty('name')); // check this key is exist in this object

const course = {
    courseName: "Java Script",
    courseFee: 5000,
    courseInstructer: "Hitesh"
}

// console.log(course.courseFee);

let {courseInstructer: instructer} = course;
console.log(instructer);


///   API values json
{
    "name" : "Ziyad",
    "id": "3235",
    "link": "https/ziyadgitub.com"

}