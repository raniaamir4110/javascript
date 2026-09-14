// Question no 1
// var right_now = new Date()
// document.write(right_now)

// Question no 2
// var right_now = new Date()
// var month = right_now.getMonth()
// var month_name;
// if (month==8) {
//    month_name = "September" 
// }
// document.write("Current Month : " + month_name)

// Question no 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is " + nameOfToday)

// Question no 4
// var time = new Date()
// var day = time.getDay()
// if(day==6 || day==7){
//     alert("its a fun day")
// }else{
//     alert("its a boring day")
// }

// Question no 5
// var time = new Date()
// var day = time.getDate()
// if (day<=15) {
//     alert("First fifteen days of the month")
// } else {
//     alert("Last fifteen days of the month")
// }

// Question no 6
// var now = new Date()
// var specific_time = now.getTime() 

// document.write("Current Date :" + now)
// document.write("<br>Elapsed milisecond since January 1, 1970: " + specific_time)
// document.write("<br>Elapsed minutes since January 1, 1970: " + specific_time/60000)

// Question no 7
// var time = new Date()
// var hour = time.getHours()
// if (hour <=12) {
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

// Question no 8
// var laterDate = new Date("December 31, 2020")
// document.write("Later Date : " + laterDate)9

// Question no 9
var ramadan = new Date("February 19, 2026")
var today = new Date()
var difference = today.getTime() - ramadan.getTime()

var days = difference / (1000 * 60 * 60 * 24)

document.write(Math.floor(days) + " has passed since 1st Ramadan")