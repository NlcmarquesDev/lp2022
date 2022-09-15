let getal = Number(prompt('Hoeveel getallen in:'));

let num1=0;
let num2=1;
console.log(0);
console.log(1);
for (i = 0; i < getal; i++){
    sum=num1+num2;
    console.log(sum)
    num1=num2;
    num2=sum;
}