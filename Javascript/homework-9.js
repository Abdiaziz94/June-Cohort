var word1 = "thisissomethingthatcontainsnothing"
var word2 = []

function repeatedCharacters(word){
    
    word = word1.split('')
    
    
    for(let i=0; i<word.length;i++){
        if(word2.includes(word[i])){
            console.log("nothing")
        }else{
            word2.push(word[i])
        }
    }
    console.log(word2)



}

repeatedCharacters(word1)


//this
//is
//something
//that 
//contains
//nothing