//push --> Adds one or more elements to the end of an array and returns the new length of the array.

let heroes=['Bruce Wayne','Tony Stark','Steve rogers','Jack Sparrow'];
heroes.push('loki');
console.log("The heroes :"+heroes+"\n");

//pop --> Removes the last element from an array and returns that element.
let removehero=heroes.pop();
console.log(removehero+" is not a hero type"+"\n");
console.log(heroes);

//shift --> Removes the first element from an array and returns that element.
let shifthero=heroes.shift();
console.log(shifthero+" is shifted from heroes"+"\n");
console.log(heroes);


//unshift --> Adds one or more elements to the beginning of an array and returns the new length of the array.
let unshifthero=heroes.unshift('Bruce Wayne','Clark Kent(aka superman)');
console.log("Here,I am back now we're totally "+unshifthero+" members"+"\n");
console.log(heroes);

//splice -->  Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let spliceheroes=heroes.splice(0,0,'loki');
console.log("superhero type is back in front"+"\n");
console.log(heroes);

//slice -->  Returns a shallow copy of a portion of an array into a new array object.
let avengers=heroes.slice(3,5);
console.log(avengers);

console.log("--------------------------");

//forEach -->  Executes a provided function once for each array element.

let score=[1,2,3,4,5,6];
score.forEach(function(number){
    console.log(number*2);
});

//map --> Creates a new array populated with the results of calling a provided function on every element in the calling array.
//calling array-score, new array-newScore.

let newScore=score.map(function(number){
    return number*5;
});
console.log(newScore);

//fiter --> Creates a new array with all elements that pass a condition implemented by the provided function.

let Evenscore=newScore.filter(function(number){
    return number%2 == 0;
});
console.log(Evenscore);

//reduce --> Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// accumulator: The accumulator accumulates the callback's return values. 
//               It is the accumulated value previously returned in the last invocation of the callback, 
//               by giving a initialValue as 0 or default accumulator value is first element in an array
//               and it is skipped during iteration.

// currentValue: The current element being processed in the array.

let sumOfScores=score.reduce(function(accumulator,currentValue){
    //console.log(accumulator+" "+currentValue);
    return accumulator+currentValue;
},0);
console.log(sumOfScores);