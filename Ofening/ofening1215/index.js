let som = 0;
let teller = 1;
let gemiddelde = 0;

let aantalgetallen = Number(prompt('Hoe veel getallen hij wil ingeven?'));

while (teller <=aantalgetallen) {
    let getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
    som+= getal;
    teller++;
}
console.log("de totale som van:" , aantalgetallen, "getallen is:", som);
gemiddelde = som/aantalgetallen;
console.log("het gemmidelde van:", aantalgetallen, "getallen is", gemiddelde);
