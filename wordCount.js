var sentence = "This is Nahid Hasan";

let count = 1;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " && sentence[i - 1] != " ") {
        count++;
    }

}
console.log("Total Word ", count);