let numInput: number = 153;
let numArm: number = numInput;
let lengthArm: number = numArm.toString().length;
let temp = 0
while(numInput > 0){
    temp = temp + (numInput%10) ** lengthArm;
    numInput = Math.floor(numInput/10);
}
if(temp === numArm) {
    console.log("Number is Armstrong Number.")
} else {
    console.log("Number is Not an Armstrong Number.")
}