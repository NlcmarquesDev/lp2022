let teller = 1;
let afdruk = "";
let tellerElkeTiende = 10;
let eindgetal = Number(prompt("geef het eindgetal in:"));

while (teller<= eindgetal){
    if(teller === tellerElkeTiende){
        afdruk += " ,"
        tellerElkeTiende +=10
    }else if (teller%3 ===0){
        afdruk+=teller + "," +teller + ",";
    }else{
        afdruk+= teller + ",";
    }
    teller++;
}
console.log(afdruk.substring(0,afdruk.length-1));