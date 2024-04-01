//What is the purpose of the array splice method

let arr=[1,2,6,7,10];
arr.splice(2,0,3,4,5);
console.log(arr);
let removedEle=arr.splice(-1);
console.log(removedEle);
arr.splice(arr.length,0,8,9,10);
console.log(arr);