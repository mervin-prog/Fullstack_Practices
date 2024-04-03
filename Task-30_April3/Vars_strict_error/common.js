/* Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.

eg:  In normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

*/




'use strict';
let a=10;
const b=30;

//let let =5;  // Unexpected strict mode reserved word

try{
    b=40;
}catch(error){
    console.log("const keyword can't reassign values");
}







