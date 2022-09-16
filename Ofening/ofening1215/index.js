let hoeVeelGetal = Number(prompt('Hoe veel getallen hij wil ingeven?'));
let som = 0;
while (getal >0) {
    getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
}

let som = 0;
let getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
while (getal >0){
    som+=getal;
    getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
}
console.log(som);
