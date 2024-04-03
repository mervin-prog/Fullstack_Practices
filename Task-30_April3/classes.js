class Person{
    constructor(name,role){
        this.name=name;
        this.role=role;
    }

    hello(){
        console.log(`Hello my name is ${this.name} and I am working as a ${this.role} developer`);
    }
}

class Experience extends Person{
    constructor(name,role,experience){
        super(name, role);
        this.experience=experience;
    }
    working(){
        console.log(`${this.name} has ${this.experience} years of experience as a developer`);
    }
}
let person1 = new Experience('Alex', 'Frontend', 'two');
let person2 = new Experience('Emily', 'Backend', 'three');
let person3 = new Experience('John', 'Fullstack', 'four');

person1.hello();
person1.working();

console.log("\n");

person2.hello();
person2.working();

console.log("\n");

person3.hello();
person3.working();
