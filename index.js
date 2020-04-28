//This is my first javascript code//
console.log('Hello World');
let name = 'Theodore';
console.log(name);

//cannot be reserved keyword//
//should be meaningful and descriptive names
//cannot start with a number (1name)
//cannot contain space or hyphen (-)
//are case sensitive

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//primitive value types
//let name = 'Theodore'; //string lateral
//let age = 30; //number lateral
//let isApproved = true; //Boolean Literal
//let firstName = undefined;
//let selectedColor = null;

//This are objects

let person = {
    name: 'Theodore',
    Age: 5,
    weight: 40
        
};
person.name = 'emmy'

console.log(person.name);

//This are arrays

let selectedColor = ['yello', 'green'];
console.log(selectedColor);

let selectedRgb = ['yellow', 'green', 'blue', 'red'];
selectedRgb[4] = 'purple';
console.log(selectedRgb);

let selectedRolls = ['yellow', 'green', 'blue', 'red'];
selectedRolls[4] = 'purple';
console.log(selectedRolls.length);

//This is a function//

function greet(name, lastName){
    console.log('Hello ' + name + '' +lastName);
}
greet('Theodore ', 'Kirui')
greet('Mercy ','Cherono')
greet('Leonard ','Ruto')






