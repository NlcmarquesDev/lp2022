let number = Number(prompt("Getal een number in:"))

let i =0;
let opvangbank = "";
let y =1;
for (i;i<=number;i++){
    y *=2;
    if (y <=number) {
        opvangbank = opvangbank + y + ",";
    }
}
    console.log(opvangbank);

