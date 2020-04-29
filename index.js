//logical AND (&&)
//Returns TRUE if both operants are TRUE

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome ||  goodCreditScore;
console.log( 'Eligible', eligibleForLoan);

//Not (!)
let applicationRefused = !eligibleForLoan;


console.log( 'Application Refused', applicationRefused);