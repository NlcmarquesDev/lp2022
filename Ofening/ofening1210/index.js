/*let tafel = Number(prompt("De tafel van:"));
let eindgetal = Number(prompt("het eindgetal:"));
let i=1;
let final = tafel*eindgetal;

for(i;i<=eindgetal;i++){

        linha = (tafel + "X" + i + "=" + (i*final));

        console.log(linha);
}

Mijn Versie
*/

const tafel = Number(prompt("De tafel van:"));
const eindgetal = Number(prompt("het eindgetal:"));
let resultaat = "#";
let y=1;
for (let i=1;i<=eindgetal;i++){
        if(y<=eindgetal){
                for (let x=1;x<=3;x++){
                        resultaat = resultaat + tafel+ "X"+ y+"="+ tafel*y+ ",";
                        y++;
                }console.log(resultaat.substring(0,resultaat.length-1));
                resultaat = " #";
        }

}


