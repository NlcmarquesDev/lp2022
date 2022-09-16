/*
var soma = 0;
for (var i = 0; i < 7 ; ) {
    number=prompt("Entre com o numero: ");
    number= parseInt(number);
    while (number > 0) {
        soma = soma + number;
        number = 0;
    }
    i++;
}

document.write("A soma dos positivos é: "+soma);

 */
let som = 0;
let getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
while (getal >0){
    som+=getal;
    getal = Number(prompt('Geef een getal in, stop met een negatief getal'));
}
console.log(som);
