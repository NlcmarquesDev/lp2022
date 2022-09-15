let getal1 = Number(prompt('geef een getal in:'));
let getal2 = Number(prompt('geef een tweede getal in:'));
let x;
for(i= 1;i<=getal1 ;i++){
    x= getal1 %getal2;
    getal1 = getal2;
    getal2 = x;

}
console.log( 'de grootste gemene deler van ' + getal1 + "en" + getal2 + "is:" + x )



/*var gcd;
while (a!=b)
{
    if (a>b)
    {
        a = a -b;
    }
    else
    {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);*/