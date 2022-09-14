let age = Number(prompt("Geef de leeftijd in:"));
if(age >= 18){
    let aantalvakjes = prompt("volledige bulletin? tik 12, 10,8,6,4,2 in")
    if (aantalvakjes === 12){
        console.log("20 euro aub")
    }else if(aantalvakjes === 10) {
        console.log("18 euro aub");
    }else if(aantalvakjes === 8) {
        console.log("16 euro aub");
    }else if(aantalvakjes === 6) {
        console.log("12 euro aub");
    }else if(aantalvakjes === 4) {
        console.log("8 euro aub");
}else{
    console.log("8 euro aub");
}}



/*
let vakjes = Number(prompt("Willen spellen: 12, 10,8,6,4,2 vakjes? "));
if(vakjes >= 12
){
    console.log("Kost 20 euros");
}else if(vakjes  >= 10 ){
    console.log("Kost 18 euros");
}else if(vakjes  >= 8 ) {
    console.log("Kost 16 euros");
}else if(vakjes  >= 6 ) {
    console.log("Kost 12 euros");
}else if(vakjes  >= 4 ){
    console.log("Kost 8 euro");
}else (vakjes  >= 2 )
{
    console.log("Kost 4 euros");
}
*/