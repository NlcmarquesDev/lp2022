
let facultateit = 1;
let teller = 1;
let afdruk = "";

const getal = Number(prompt('geef een getal in:'));
while(teller<= getal) {
    facultateit*= teller;
    afdruk += teller + "X";
    teller++;

}
console.log("de facultateit van",getal,"is ", facultateit);
console.log(afdruk.substring(0,afdruk.length-1) + "=" + facultateit)


/*let faculteit = 1;
let teller = 1;
let afdruk = "";

const getal = Number(prompt('Geef getal in'));
while(teller <= getal){
    faculteit *= teller;
    afdruk += teller + 'x';
    teller++;
}
console.log("De faculteit van",getal,"is",faculteit);
console.log(afdruk.substring(0,afdruk.length-1) + "=" + faculteit)

 */