//What are the possible ways to create objects in JavaScript

//1.
const obj1={
    name:"Mervin",
    age:21,
    role:"Fullstack"
};
console.log(obj1);

//2.
function details(name,age,role){
    this.name=name;
    this.age=age;
    this.role=role;
}
const obj2=new details("John",25,"FS");
console.log(obj2);

//3.
class person{
    constructor(name,age,role){
        this.name=name;
        this.age=age;
        this.role=role;
    }
}
const obj3=new person("Natasha",35,"Cloud Trainee");
console.log(obj3);

//4.
const obj4=Object.create(person.prototype);
obj4.name="Ram";
obj4.age=40;
obj4.role="Backend Dev";
console.log(obj4);