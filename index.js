let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

if (false != true) {
    console.log("That make sense");

if (1 < 2) {
    console.log("No surprise there")
}
}
for (let number = 0; number <= 12; number = number + 2){
    console.log(number);
}

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0){
        console.log(current);
        break;
    }
}


switch (prompt("what is the weather like")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly");
    case "claudy":
        console.log("Go outside");
    default:
        console.log("unknown weather type!");
        break;
}
