// exercise 2

let x = 1;

if ((typeof(x) == 'number')&&(!isNaN(x))) {
    console.log("x is Number");
} 
   else if (typeof(x) == 'string') {
      console.log("x is String");
} 
   else if (typeof(x) == 'boolean') {
      console.log("x is Boolean");
} 
   else {
      console.log("type of X is undefined");
}