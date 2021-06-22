//0,1,1,2,3,5,8,13

function Fibonacci(n) {
    let pre = 0, previous = 1, fibonacci = [];
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else if (n < 0) {
        console.log('Incorrect input');
    }
    fibonacci[0] = pre;
    fibonacci[1] = previous;
    for (let i = 2; i <= n; i++) {

        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

    }
    return fibonacci;
}
const fibo = Fibonacci(15)
console.log(fibo);