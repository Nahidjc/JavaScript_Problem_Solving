var a = 5, b = 6;
console.log("Before Swap the Value a and b = ", a, b);
var temp;

temp = a;
a = b;
b = temp;
console.log("Before Swap the Value a and b = ", a, b);
//Different System

a = a + b;
b = a - b;

a = a - b;
console.log("Again Swapping the Value a and b = ", a, b);

//Destructure

[a, b] = [b, a];
console.log("Destructure Swap the Value a and b = ", a, b);