
let hcf;
// take input
const getal1 = prompt('Enter a first positive integer: ');
const getal2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= getal1 && i <= getal2; i++) {

    // check if is factor of both integers
    if( getal1 % i == 0 && getal2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(hcf);