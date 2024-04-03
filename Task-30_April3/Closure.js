//Closure --> A closure is a function that has access to its own scope, the outer enclosing function's variables, and the global variables.

function hardware(){
    let outerobject="Laptop hardware";

    function software(){
        let innerobject="Laptop software";
        console.log(outerobject);
        console.log(innerobject);
    }
    
    return software;

}
let closure=hardware();
console.log("hardware function executed");
closure();
console.log("compiled & executed..");