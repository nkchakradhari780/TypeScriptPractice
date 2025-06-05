function printName(firstName: string, lastName?: string) : string{
    let name = firstName + " " + (lastName ? lastName : "undefined");
    return name;
}

let result=printName("John", "Doe"); // Output: John Doe
printName("Jane"); // Output: Jane undefined

console.log(typeof result); // Output: function