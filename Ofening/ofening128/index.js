let number = Number(prompt("Getal een number in:"))

/*let i =0;
let opvangbank = "";
let y =1;
for (i;i<=number;i++){
    y *=2;
    if (y <=number) {
        opvangbank = opvangbank + y + ",";
    }
}
    console.log(opvangbank);
Mijn versie
*/
gir
let i = 1;
let resultaat = " ";
let x = 1;
for(i;i<=number;i++){
    if(x<=number){
        //console.log(x);
        resultaat=resultaat + x + ",";
    }
    x=x*2;
}
console.log(resultaat.substring(0,resultaat.length-1));
