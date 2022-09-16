/*let getal1 = Number(prompt('geef een getal in:'));
let getal2 = Number(prompt('geef een tweede getal in:'));

let rest = 1;
let x = getal1;
let y = getal2;


 */
let hcf;
// take input
const getal1 = prompt('Enter a first positive integer: ');
const getal2 = prompt('Enter a second positive integer: ');

let multi = getal1*getal2;

// looping from 1 to number1 and number2
for (let i = 1; i <= getal1 && i <= getal2; i++) {

    // check if is factor of both integers
    if( getal1 % i == 0 && getal2 % i == 0) {
        hcf = i;
    }
}
kleinsteGemeenVeelVoud = multi/hcf;
// display the hcf
console.log(kleinsteGemeenVeelVoud);