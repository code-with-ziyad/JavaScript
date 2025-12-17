let Array =  [1, 2, 3, 4, 5, 6, 7]

for (const arr of Array) {
    // console.log(arr);
}

let value = "HELLO WORLD";

for (const val of value) {
// console.log(`=> ${val}`);

}

let map = new Map();
map.set(`PAK`, "PAKISTAN")
map.set(`USA`, "UNITED STATE OF AMERICA")
map.set(`IN`, "INDIA")
map.set(`CHIN`, "CHINA")

// console.log(map);
for(const [key, value] of map) {
    // console.log(key, `:-`, value);
    
}

const program = {
    js: "Jaba Script",
    py: "Pyton",
    html: "hyper text markup language"

}
for(const [key, value] of Object.entries(program)) {
//    console.log(`${key} of value ${value}`);
   
}

   /// array ke ander Objects kese store kare 

let Mobiles = [
      {
        MobileName: "Oppo",
        Model : 2021,
      },
      {
        MobileName: "Redmi",
        Model : 2023,
      },
      {
        MobileName: "iPhone",
        Model :  2017,
      },
      {
        MobileName: "Poco",
        Model :  2025,
      }

]
 Mobiles.forEach(  (items) => {
    console.log(items.MobileName);
    
})

// Ek array ke andar multiple objects store kiye ja sakte hain

// Real life data (products, users, posts) isi form me hota hai

// ✔ Most common structure in real projects & APIs