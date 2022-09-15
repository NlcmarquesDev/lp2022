let priemgetal = Number(prompt("Getal een number in:"))

let i = 1;
let divisor = 0;
for (i; i <= priemgetal;i++) {
    if (priemgetal % i === 0) {
        divisor++;
    }
}
    if(divisor==2){
        console.log("is primo ")
    }else{
        console.log("is not primo ")
    }

