function factorialRecursive(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1)
    }

}

const fact = 10;
const factorial = factorialRecursive(fact);
console.log(factorial);