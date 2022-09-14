//var voorNaam = "Tom";
//variabelen als camelcase schrijven
//console.log(voorNaam);
//console.log(typeof (voorNaam));


var voorNaam = prompt( "Geef je voornaam in:");

var geboorteJaar = 1973;
console.log(geboorteJaar);
console.log(typeof (geboorteJaar));

var gehuwd = true; // boolean pode ser so duas opcoes
console.log(gehuwd);
console.log(typeof (gehuwd));

var niets; // aqui aparece undefined, porque nao criou o conteudo dentro da variavel
console.log(niets);
console.log(typeof(niets));

niets = 7;
console.log(niets);
console.log(typeof(niets));

var x = Number("Full stack dev"); // criou uma falta NaN  que avisa que o que esta dentro nao e um numero
console.log(x);

var familieNaam = "Vanhoutte";
console.log(voorNaam,familieNaam);
console.log(voorNaam+familieNaam);
console.log(voorNaam + " " + familieNaam);

window.confirm("Ben je zeker dat je wenst te verwijderen?");




window.alert("Hallo, welkom bij javascript");
