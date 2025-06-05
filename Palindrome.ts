let number: number = 12321; 
let original: number = number; 
let reversed: number = 0;

while (number > 0) {
    let temp: number = number % 10;
    reversed = (reversed * 10) + temp;
    number = Math.floor(number / 10);
}

if (reversed === original) {
    console.log("The number is a palindrome.");
}   
