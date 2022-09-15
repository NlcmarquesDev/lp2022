const aantallijnen = Number(prompt("Number of stars?"));
const helft = aantallijnen/2;//5
let ster = "*";
//1<=5

for(let i=1;i<=helft;i++){
    console.log(ster);
    ster=ster + "*";
}

ster = ster.substring(0,ster.length-1);

for(let i=1;i<=helft;i++){
    console.log(ster);
    ster = ster.substring(0,ster.length-1);
}
