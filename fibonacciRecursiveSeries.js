function fibonacciRecursive(n) {
    if (n == 0) {
        return [0]
    } if (n == 1) {
        return [0, 1]
    } else {
        var fibo = fibonacciRecursive(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement)
        return fibo;
    }
}
const fibo = fibonacciRecursive(15)
console.log(fibo);