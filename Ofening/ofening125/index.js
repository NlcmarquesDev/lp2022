let i =0;
let opvangbank = "";

for (i;i<=99;i++){
    if (i<=9){
        opvangbank = opvangbank + "0"+ i + ",";
    }else{
        opvangbank = opvangbank + i + ",";
    }
}
console.log(opvangbank);