let age =   Number(prompt( "jouw geboorte datuum?"))
let year =   Number(prompt( "lopende jaartal in:"))

let ageNow = year - age;
 if (ageNow >= 18){
     console.log("Vanaf nu mag, kan en beslis ik alles , binnen de wettelijke grenzen. ")
 }else{
     console.log("Gelukkig heb ik mijn ouders die alles voor me regelen.")
 }