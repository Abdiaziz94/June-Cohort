function celsius(num){
   return num

} 
console.log(celsius(35)) 

function celciustoFarenheit(){
    var converter = celsius(35)
    var farenheit = (converter*9/5)+32
    console.log(farenheit)
}
celciustoFarenheit()