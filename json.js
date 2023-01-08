//Converting to and from JSON

const member = {
    name: 'Leo',
    age : 57,
    'married age': 31
}

console.log(JSON.stringify(member));

//convert a JSOn string back to JavaScript

const ourJSON = JSON.stringify(member);
const person = JSON.parse(ourJSON);
console.log(person.name);