let numbers = [4, 5, 3, 6, 8, 9]
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}
console.log(max);