// Question no 1
// function getTime(){
//     var time = new Date()
//     document.write(time)
// }
// getTime()

// Question no 2
// function greetUuser(){
//     var firstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your Last name")
//     alert(`Welcome  ${firstName} ${lastName}!`)
// }
// greetUuser()

// Question no 3
// function sum(){
//     var num1 = +prompt("Enter the first number")
//     var num2 = +prompt("Enter the second number")
//     var result = num1+num2
//     alert(`${num1} + ${num2} = ${result}`)
// }
// sum()

// Question no 4
// function calculator(num1, num2, operator) {
//     if (operator == "+") {
//         return num1 + num2;
//     }
//     else if (operator == "-") {
//         return num1 - num2;
//     }
//     else if (operator == "*") {
//         return num1 * num2;
//     }
//     else if (operator == "/") {
//         return num1 / num2;
//     }
//     else {
//         return "Invalid operator";
//     }
// }

// document.write(calculator(10, 5, "+"));

// Quuestion no 5
// function square(num) {
//     return num * num;
// }

// document.write(square(5));

// Question no 6
// function factorial(num) {
//     var result = 1;

//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// }

// document.write(factorial(5));

// Question no 7
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// counting(1, 10);

// Question no 8

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var result = Math.sqrt(
//         calculateSquare(base) + calculateSquare(perpendicular)
//     );

//     return result;
// }

// document.write(calculateHypotenuse(3, 4));

// Question no 9
// function area(width, height) {
//     return width * height;
// }

// document.write(area(10, 5));

// var width = 10;
// var height = 5;

// function area(width, height) {
//     return width * height;
// }

// document.write(area(width, height));

// Question no 10
// function palindrome(str) {
//     var reverse = str.split("").reverse().join("");

//     if (str == reverse) {
//         return "Palindrome";
//     }
//     else {
//         return "Not a palindrome";
//     }
// }

// document.write(palindrome("madam"));

