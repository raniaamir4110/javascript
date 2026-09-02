// Question no 1
// var  multi_array = [[[[[]]]]]

// Question no 2
// var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(matrix)

// Question no 3
// for(var i = 1; i<=10; i++){
//     console.log(i)
// }

// Question no 4
// var table = +prompt("Enter a number to show it's multiplication table")
// var length = +prompt("Enter length of multiplication table")
// for(var i = 1; i<=length; i++){
//     document.write("<br>"+ table + "x" + i + "=" + table*i)
// }

// Question no 5
// var fruits = ["apple","banana","mango","orange","strawberry"]
// var join_fruits = fruits.join(" <br>")
// document.write("<br>" + join_fruits)
// for(var  i = 0; i<fruits.length; i++){
//     document.write("<br>The Element at index " + i + " is " + fruits[i])
// }



// Question no 6
// var forward_counting = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// var reverse_counting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// var even_counting = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// var odd_counting = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// var series_counting = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]

// document.write("COUNTING : <br>" + forward_counting)
// document.write("<br><br>REVERSE COUNTING : <br>" + reverse_counting)
// document.write("<br><br>EVEN  : <br>" + even_counting)
// document.write("<br><br>ODD : <br>" + odd_counting)
// document.write("<br><br>SERIES : <br>" + series_counting)

// Question no 7
// var A = ["cake","apple pie","cookie","chips","patties"]
// var user_input = prompt("Welcome to ABC Bakery! What do you want to order Sir/Ma'am")
// var index = A.indexOf(user_input)
// if( index !== -1){
//     alert(user_input +  " is available at index " + index + " in our bakery")
// }else{
//     alert("We're sorry " + user_input + " is not available in our bakery")
// }

// Question no 8
// var A =[24, 53, 78, 91, 12]
// document.write(A)
// var largest_num = A[0]

// for(var i = 0; i<A.length; i++){
//     if(A[i] > largest_num){
//         largest_num = A[i]
//     }
// }
// document.write("The largest number is: " + largest_num)

// Question no 9
// var A =[24, 53, 78, 91, 12]
// document.write(A)
// var smallest_num = A[0]

// for(var i = 0; i<A.length; i++){
//     if(A[i] < smallest_num){
//         smallest_num = A[i]
//     }
// }
// document.write("The smallest number is: " + smallest_num)

// Question no  10

// for(var i=1; i<=100; i++){
//     if(i % 5 === 0){
//         document.write(i + "<br>")
//     }
// }
