let getal1 = Number(prompt("getal1"));
let getal2 = Number(prompt("getal2"));

/*selectie (conditie testen)*/

if (getal1>getal2) {
    console.log(getal1, "is groter dan", getal1);
}else{
    console.log(getal1, "is kleiner dan", getal1);
}

let naam = "Tom";
let beroep = prompt("beroep? bediende, arbeider, werkzoekend")
if(beroep === "bediende"
){
    console.log("u bent bediende");
}else if(beroep === "arbeide"){
    console.log("u bent arbeider");
}else{
    console.log("u bent werkzoekend");
}