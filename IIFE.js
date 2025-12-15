    
      // IIMEDIATELY INVOKED FUNCTION EXPRESSIONS  (IIFE)

(function one() {   // named IIFE
    console.log(`DB connected`);
})();  // ;



((name) => {
    console.log(`DB connected Two ${name}`);
})(`Ziyad`)