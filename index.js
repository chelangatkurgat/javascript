//falsy (false)
//undefined
//null
//0
//false
//''
//NoN

//Anything that is not faalsy -> Truthy

//short-circuting

let usercolor = undefined;
let defaultcolor = 'blue';
let currentColor = usercolor || defaultcolor;

console.log(currentColor);
