/*
*declarer de volgende variabelen:
* getal1,getal2, quotient, verschil, som, product
* druk af in console.log wat het resultaat is van deze 2 getallen
 */

let getal1 = Number(prompt("geef getal 1 in:"));
let getal2 = Number(prompt("geef getal 2 in:"));

/*let quotient = getal1 / getal2;
console.log(quotient);

let verschil = getal1 - getal2;
console.log(verschil);

let som = getal1 + getal2;
console.log(som);

let product = getal1 * getal2;
console.log(product);
*/

// outra forma de colocar o codigo

let quotient, verschil, som, product;
quotient = getal1/getal2;
rest = getal1%getal2;
verschil = getal1-getal2;
som = getal1+getal2;
product = getal1*getal2;

console.log(quotient);
console.log(rest);
console.log(verschil);
console.log(som);
console.log(product);

getal1 = Number (getal1);
console.log(typeof(getal1));
console.log(getal1);

getal2 = Number (getal2);
console.log(typeof(getal2));
console.log(getal2);