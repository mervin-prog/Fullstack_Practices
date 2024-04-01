//What is the difference between slice and splice

let arr=[1,2,3,4,5];
//slice
let sliceArr=arr.slice(0,3);
console.log("Sliced Array:"+sliceArr);
console.log("Original Array:"+arr);

//splice
let spliceArr=arr.splice(-2);
console.log("Spliced Array:"+spliceArr);
console.log("Original Array:"+arr);
console.log("Original array is modified in splice whereas in slice it is not !");
