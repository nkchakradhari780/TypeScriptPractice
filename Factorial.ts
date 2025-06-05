function factorial(n: number): number {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let num: number = 5;
let fact = factorial(num);
console.log("Factorial of " + num + " is: " + fact);