

let globalVariable = 'I am global';

function outerFunction() {
  let outerVariable = 'I am outer';

  function innerFunction() {
    let innerVariable = 'I am inner';
    console.log(globalVariable); // Access global variable
    console.log(outerVariable); // Access outer variable
    console.log(innerVariable); // Access inner variable
  }

  innerFunction();
}

outerFunction();






