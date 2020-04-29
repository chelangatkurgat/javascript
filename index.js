const person = {
    name: 'Emmy',
    age: 30
};

for (let key in person)
    // console.log(key);

    console.log(key, person[key]);

const colors = ['red', 'blue', 'green']

for (let index in colors)
// console.log(index);

console.log(index, colors[index]);

//This iterate elements or items in an array//
for (let color of colors)
    console.log(color);

