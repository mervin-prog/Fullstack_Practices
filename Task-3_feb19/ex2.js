//What is a prototype chain

function hello(name){
    this.name=name;
}
hello.prototype.respond=function(){
    console.log("Hello, sir!");
};

const obj=new hello("JARVIS");
console.log(obj.name);

obj.respond();
