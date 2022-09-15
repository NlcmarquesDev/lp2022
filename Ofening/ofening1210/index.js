let tafel = Number(prompt("De tafel van:"));
let eindgetal = Number(prompt("het eindgetal:"));
let i=1;
let final = tafel*eindgetal;

for(i;i<=eindgetal;i++){
    console.log( tafel + "X" + i + "=" + (i*final));
}