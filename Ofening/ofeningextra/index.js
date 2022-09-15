/**
 * Geef een  raden getal in: 67
 *
 * raad het getal: 5
 *
 * de pc zegt dan hoger of lager tot het getal geraden is
 *
 * geef ook weer hoeveel poginden de gebruiker nodig heeft.
 * for loop
 *
 * **/

let teRadenGetal =  Number(prompt("geef een getal in:"));
var raadGetal =  Number(prompt("geef een getal in:"));
let counter = 0;
for(let teller = 1;teller >0;teller++){
    if(raadGetal < teRadenGetal){
        console.log("Getal is groter!");
        counter++;
        raadGetal = Number(prompt("Geef een Getal in:"));
    }else if(raadGetal > teRadenGetal){
        console.log("Getal is kleiner!");
        counter++;
        raadGetal = Number(prompt("Geef een Getal in:"));
    }else{
        counter++;
        console.log("WIN!, het getal is,", raadGetal,  "en je hebt,", counter , "geraden");
        teller = -1;
    }
}



/*let x = 67;
let getal =  Number(prompt("geef een getal in:"));
let tentativas = 3;
for(let i=1;i<=tentativas;i++){
    if(getal==x){
       alert(" You win! ");
       break

    }else if(getal<x){
        y= x-getal;
        alert(" is kleiner dat getal geraden voor " + getal);
        getal++;

    }else{
        (y= getal-x)
        alert(" is kleiner dat getal geraden voor " + getal);
        getal++;
    }
}
 */