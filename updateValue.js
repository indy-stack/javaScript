//Using the person object complete some tasks

let person = {
    name: "Albert Einstein",
    profession: "Theoretical physicist",
    languages: ["Italian", "English"],
    equation: "c^2= a^2 + b^2",
    quote:
        "Life is like riding a bicycle. To keep your balance you must keep moving."
};

//add german to the array of objects
console.log(person.languages.push("German"));
console.log(person.languages);

//replace the equuation with "e= mc^2"
person.equation = "e= mc^2"
console.log(person.equation);

//add a new key called "nobelRecipients" with value true
person["nobelRecipient"] = "true";
//also can be added with person.nobelRecipient = "true"
console.log(person.nobelRecipient);

//delete the quote key
delete person.quote;

//log the new person object to the console
console.log(person);
