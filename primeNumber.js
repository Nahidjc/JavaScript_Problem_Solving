function primeNumber(n) {
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return "This Number is Prime"
            }

        }
    }

    return "Not Prime"
}

const prime = primeNumber(19);
console.log(prime);