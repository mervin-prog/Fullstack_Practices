const AOP = require("./aop.js")

class MyBussinessLogic {

    add(a, b) {
        console.log("Calling add")
        return a + b
    }

    concat(a, b) {
        console.log("Calling concat")
        return a + b
    }

    power(a, b) {
        console.log("Calling power")
        return a ** b
    }
}

const o = new MyBussinessLogic()

//Managing and reusable code by using aop implementation.
function loggingAspect(...args) {
    console.log("== Calling the logger function ==")
    console.log("Arguments received: " + args)
}

function printTypeOfReturnedValueAspect(value) {
    console.log("Result : "+value);
    console.log("Returned type: " + typeof value)
}

AOP.inject(o, loggingAspect, "before", "methods")
AOP.inject(o, printTypeOfReturnedValueAspect, "afterReturning", "methods")

o.add(5,5)
o.concat("hello", "goodbye")
o.power(2,5)