// Question no 1
// function power(a, b) {
//     let result = 1;

//     for (let i = 1; i <= b; i++) {
//         result = result * a;
//     }

//     return result;
// }

// console.log(power(2, 3)); // 8
// console.log(power(5, 2)); // 25


// Question no 2
// function current_year(){
//     var c_year = prompt("Enter a year")
//     if (c_year % 4 == 0) {
//         alert("It's a leap year")
//     } else {
//        alert("It's not a leap year")
//     }
// }
// current_year()

// Question no 3

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     let S = calculateS(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// let a = Number(prompt("Enter side a:"));
// let b = Number(prompt("Enter side b:"));
// let c = Number(prompt("Enter side c:"));

// alert("Area of triangle = " + calculateArea(a, b, c));

// Question no 4
// function average(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function percentage(m1, m2, m3) {
//     return ((m1 + m2 + m3) / 300) * 100;
// }

// function mainFunction() {
//     let m1 = Number(prompt("Enter marks of subject 1:"));
//     let m2 = Number(prompt("Enter marks of subject 2:"));
//     let m3 = Number(prompt("Enter marks of subject 3:"));

//     let avg = average(m1, m2, m3);
//     let per = percentage(m1, m2, m3);

//     alert("Average = " + avg + "\nPercentage = " + per + "%");
// }

// mainFunction();

// Question no 5

// function myIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }

//     return -1;
// }

// let result = myIndexOf("Hello", "l");

// Question no 6
// function removeVowels(sentence) {
//     let result = "";

//     for (let i = 0; i < sentence.length; i++) {
//         switch (sentence[i].toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 break;
//             default:
//                 result += sentence[i];
//         }
//     }

//     return result;
// }

// let sentence = prompt("Enter a sentence:");
// alert(removeVowels(sentence));

// Question no 7

// function removeVowels(sentence) {
//     let result = "";

//     for (let i = 0; i < sentence.length; i++) {
//         switch (sentence[i].toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 break;
//             default:
//                 result += sentence[i];
//         }
//     }

//     return result;
// }

// let sentence = prompt("Enter a sentence:");
// alert(removeVowels(sentence));

// Question no 8
// function meters(km) {
//     return km * 1000;
// }

// function feet(km) {
//     return km * 3280.84;
// }

// function inches(km) {
//     return km * 39370.1;
// }

// function centimeters(km) {
//     return km * 100000;
// }

// function mainFunction() {
//     let km = Number(prompt("Enter distance in kilometers:"));

//     alert(
//         "Meters = " + meters(km) +
//         "\nFeet = " + feet(km) +
//         "\nInches = " + inches(km) +
//         "\nCentimeters = " + centimeters(km)
//     );
// }

// mainFunction();

// Questiion no 9
// function overtimePay(hours) {
//     if (hours > 40) {
//         return (hours - 40) * 12;
//     } else {
//         return 0;
//     }
// }

// let hours = Number(prompt("Enter hours worked:"));

// alert("Overtime pay = Rs. " + overtimePay(hours));

// Question no 10

// function calculateNotes(amount) {
//     let amountInRupees = amount * 100;

//     let notes100 = Math.floor(amountInRupees / 100);
//     amountInRupees = amountInRupees % 100;

//     let notes50 = Math.floor(amountInRupees / 50);
//     amountInRupees = amountInRupees % 50;

//     let notes10 = Math.floor(amountInRupees / 10);

//     alert(
//         "100 notes = " + notes100 +
//         "\n50 notes = " + notes50 +
//         "\n10 notes = " + notes10
//     );
// }

// let amount = Number(prompt("Enter amount in hundreds:"));

// calculateNotes(amount);