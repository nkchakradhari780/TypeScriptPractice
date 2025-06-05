
function isPrime(num: number): boolean {
    if (num < 2 ) return false;
    for (let i=2;i <= Math.sqrt(num); i++){
        if(num%i === 0 ) return false;
    }
    return true;
}

let prime = isPrime(5)

if(prime) {
    console.log("Number is Prime Number");
} else {
    console.log("Not a Prime Number.");
}