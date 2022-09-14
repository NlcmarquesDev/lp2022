/*let number = Number(prompt("hoeveel getallen hij wil ingeven?"));

let getal1 = Number(prompt("Geef getal 1 in:"));
let getal2 = Number(prompt("Geef getal 2 in:"));
let getal3 = Number(prompt("Geef getal 3 in:"));

for (i;i<=10;i++){
    console.log("De totale som van "+ number+ "getallen is"+ );
}
*/

let aantalGetallen = Number(prompt("Geef aantal getallen?"));


let i = 1;
let totalsom=0;
for (i;i<=aantalGetallen;i++){
    let ingaveGetal = Number(prompt("Geef getal " +i+ " in:"));
    totalsom = totalsom + ingaveGetal;
}
console.log("De totale som van" ,aantalGetallen, " is", totalsom);
