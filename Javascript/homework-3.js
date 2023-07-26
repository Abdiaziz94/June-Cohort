var Superman = "DC"
var Ironman = "Marvel"
var Batman = "DC"
var Hulk = "Marvel"
var hero = Superman

if( hero === "DC"){
    console.log('hero is DC');
} else if (hero  === "Marvel"){
    console.log ("hero is Marvel");
}

var age = 14;

if(age>=4 && age<11){
    console.log("You are in Primary School");
}
else if (age<=16){
    console.log("You are in Secondary School");
}
else if (age<=18)
console.log("You are in College");

var shoppinglist = ["Milk", "Bread", "Cereal", "Eggs", "Watermelon"];

if(shoppinglist.length < 5){
    console.log("Error")
}
else if(shoppinglist.length >= 5){
    console.log("You have Five items")
}

let day = "TUESDAY"

day = day.toLowerCase()


if(day=== "monday" || day=== "tuesday" || day==="thursday"
|| day==="friday"){
    console.log(`${day} is a weekday`)
} else if (day=== "saturday" || day ==="sunday"){
    console.log(`${day} is a weekend`)
} else{
    console.log("Not possible")
}

