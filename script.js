const age = 26;
const isFemale = true;
const driverStatus = 'bob';
const hisName = "Pieter";
const herName = "Anna";
const totalAmount = 100;

// leeftijdscontrole:
if (age >= 18){
    console.log("Je mag naar binnen"); 
} 

else{
    console.log("Je bent te jong, je mag niet naar binnen");
}

// ladiesnight:
if (isFemale){
    console.log("Je mag een kaartje kopen");
}

else{
    console.log("Je bent geen lady, je mag geen kaartje kopen");
}

// bob:
if (driverStatus == 'bob'){
    console.log("rij veilig");
}

else{
    console.log("we bellen een taxi voor je");
}

// 50% korting:
if (age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!");
}

else{
    console.log("Sorry, geen korting voor jou.");
}

//Sarah of Abraham
if (hisName == "Bram" || herName == "Sarah"){
    console.log("je krijgt een biertje gratis")
}

else{
    console.log("sorry pieter/anna, geen gratis biertje voor jou.")
}

/* Sarah of Abraham andere optie
const Bram = false;
const Sarah = false;

if (Sarah == true || Bram == true){
    console.log("je krijgt biertje gratis")
}

else{
    console.log("sorry pieter/anna, geen gratis biertje voor jou")
}
*/

// Jubileum korting:
if (totalAmount > 25 && totalAmount <= 50){
    console.log("Je krijgt gratis (vega)bitterballen.")
}

else if (totalAmount > 50 && totalAmount < 100){
    console.log("Je krijgt een gratis portie nachos")
}

else if (totalAmount >= 100){
    console.log("Je krijgt een gratis flesje champagne")
}
