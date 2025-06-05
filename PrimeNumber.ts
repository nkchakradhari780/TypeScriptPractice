import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question("Enter number to check prime: ", (input: string) => {
    const num = parseInt(input);

    if (isNaN(num)) {
        console.log("Please enter a valid number.");
    } else {
        let prime = isPrime(num);
        if (prime) {
            console.log("Number is Prime Number");
        } else {
            console.log("Not a Prime Number.");
        }
    }

    rl.close();
});
