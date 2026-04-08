let mySym = Symbol("key1");

let jsUser = {
    name: "Ziyad",
    age:  18,
    [mySym]: "key1",
    location: "karachi",
    email: "ziyad@gmail.com",

}

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello jsUser:");
    
}

 console.log(jsUser.greeting());
