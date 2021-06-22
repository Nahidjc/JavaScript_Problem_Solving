function Factorial(value) {
    let element = 1;
    for (let i = 1; i <= value; i++) {
        element = element * i;
        console.log(element);

    }
    return element;
}
const fac = 10;
const factorial = Factorial(fac)

console.log(`The factorial of ${fac} is : ${factorial}`);