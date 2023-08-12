// Q1.Given a word check to see if the reverse of the word is correct (i.e is the word a palindrome). Example words;
//eye in reverse is eye thus a palindrome
//madam in is reverse is madam thus a palindrome

isPalindrome = (str) => {
console.log(str.split('').reverse().join(''));
return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));

// Q2.Create a pin that is generator from a length given. E.g Length of 6 the generator must create a pin of length 6 characters
 
generatePin = (length) => {
    let pin=[];
    for(let i =0; i<length; i++){
        pin.push(Math.floor(Math.random()*10))
    }
    return pin;
};
console.log(generatePin(6))