let eindGetal = Number(prompt("Getal een number in:"))

/*let i = 1;
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
*/

for (let i=1;i<eindGetal;i++){
    var count = 0;
    for (let x=1;x<=i;x++){
        if (i%x === 0){
            count++
        }
    }
    if (count == 2) {
        console.log(i);
    }
}


