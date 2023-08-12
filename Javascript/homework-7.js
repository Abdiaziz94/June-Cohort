let day = "Saturday"


switch(day){
    case 'Monday':
    console.log ("7 Hours");
    break
    case 'Tueday':
    console.log ("5 Hours");
    break
    case 'Wednesday':
    console.log ("8 Hours");
    break
    case 'Thursday':
    console.log ("4 Hours");
    break
    case 'Friday':
    console.log ("6 Hours");
    break
    case 'Saturday':
    console.log ("3 Hours");
    break
    case 'Sunday':
    console.log ("9 Hours");   
    
}

function findaverage(){
    var sum=0;
    var average=0;
    sum=7+5+8+4+6+3+9;
    average=sum/7;
    console.log("The average sleeping hour is " + average);

}
    function findaverage()




//create a function that converts fahrenheit to kelvin
// K=((℉-32)/1.8)+273.15

function farenheit(num){
    return num
}
console.log(farenheit(40))

function Farenheittokelvin(){
    var converter = farenheit(40)
    var kelvin = (converter-32)/1.8+273.15
    console.log(kelvin)
}
Farenheittokelvin()


