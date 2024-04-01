//What is JSON and its common operations

//1.
let obj={name:"Mervin",age:21};
let jsonStr=JSON.stringify(obj);
console.log(jsonStr);

//2.
let jsonParse=JSON.parse(jsonStr);
console.log(jsonParse);

//3.
console.log(obj.name);
console.log(obj["age"]);

//4.
for(let key in obj){
    console.log(key+":"+obj[key]);
}

//5.
obj.name="Ram";
obj.role="FS";
delete obj.age;
console.log(obj);

//6.
if(typeof jsonStr==="string")
console.log("True");
else
console.log("false"); 