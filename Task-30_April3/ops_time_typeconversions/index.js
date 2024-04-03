const add= (a,b)=>a+b;
const sub= (a,b)=>a-b;
const mul= (a,b)=>a*b;
const div= (a,b)=>a/b;

//Timeout and interval.

function compile() {
    console.log("Compiling...");
}

let intervalId=setInterval(compile,1000);

setTimeout(()=>{
    console.log(add(5,5));
},2000);

setTimeout(()=>{
    console.log(sub(10,5));
},3000);

setTimeout(()=>{
    console.log(mul(10,5));
},4000);

setTimeout(()=>{
    console.log(div(10,2));
},5000);

setTimeout(()=>{
    console.log(100>90);
},6000);

setTimeout(()=>{
    let num="10";
    console.log(typeof(num));
},7000);

setTimeout(()=>{
    clearInterval(intervalId);
    console.log("Program Terminted..")
},7000);
