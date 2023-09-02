const body = document.body
const nameInput = document.getElementById("Name")
const form = document.querySelector("form")




function checkname(){
    let = false
    if(nameInput.value.length>0){
        res = true
    }
    return res
}









form.addEventListener("submit",function(e){
    e.preventDefault()
    
    var outcome = checkname()
    
    if(outcome === true){
        alert ("form passes")
    }else{
        alert("form fails")
    }
    
})