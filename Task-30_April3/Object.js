//Object.keys()--> Returns an array of a given object's property names.

let frameworks={
    frontend:"React-JS",
    backend:"Express-JS",
    fullstack:"Next-JS"
};
let keys=Object.keys(frameworks);
console.log(keys);

//Object.values()--> Returns an array of a given object's property values.
let values=Object.values(frameworks);
console.log(values);

//Object.entries() -->  Returns an array of a given object's string-keyed property [key, value] pairs.
let entries=Object.entries(frameworks);
console.log(entries);