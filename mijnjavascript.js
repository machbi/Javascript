// Opdracht 1.1
console.log("Hello world");

// Opdracht 1.2
for(var i=0; i<10; i++){
    console.log("i heeft nu de waarde" + i)
}

var a =10;
if (a > 9){
    console.log("Hallo, A is groter dan 9")
}

// Opdracht 1.3
var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: "4",
    kleur: "blauw"
}

console.log(mijnauto.kleur);

document.getElementById("grotekop").innerHTML = mijnauto.kleur;