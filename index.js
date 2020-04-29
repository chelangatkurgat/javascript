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

greet('Theodore ', 'Kirui')
greet('Mercy ','Cherono')
greet('Leonard ','Ruto')

//This is a function//
//Performing a task//

function greet(name, lastName){
    console.log('Hello ' + name + '' +lastName);
}

//calculate and return a value
function square(number){
    return number * number;
}

console.log(square(7));

let x = 10;
let y = 3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//increament (++)
console.log(x++);

//Decreament (--x)
console.log(--x);

//assignment operator;

let q = 10;
q = q + 5;
q += 5;

q =q * 3;
q *= 3;


console.log (q);





