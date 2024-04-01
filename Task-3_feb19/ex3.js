//What is the difference between Call, Apply and Bind

//call
function hello(){
    console.log("Hello, "+this.name);
}
const obj1={name:"Mervin"};
hello.call(obj1);

//apply
const obj2={name:"Mervin"};
hello.apply(obj2,[]);

//bind
const obj3={name:"Mervin"};
const BindedObj=hello.bind(obj3);
BindedObj();