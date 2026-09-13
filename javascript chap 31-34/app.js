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
// var ramadan = new Date("February 19, 2026")
// var today = new Date()
// var difference = today.getTime() - ramadan.getTime()

// var days = difference / (1000 * 60 * 60 * 24)

// document.write(Math.floor(days) + " has passed since 1st Ramadan")

// Question no 10
// var referenceDate = new Date("December 5, 2015 22:50:16")
// var beginningof2015 = new Date("January 1, 2015")

// var milisecond = referenceDate - beginningof2015
// var second = Math.floor(milisecond / 1000)

// document.write("on reference date " + referenceDate + " " + second + " seconds have passed since begining of 2015 ")

// Question  no 11

// var date = new Date();

// document.write("Current date: " + date + "<br>");

// var hours = date.getHours();
// date.setHours(hours - 1);

// document.write("1 hour ago, it was " + date);

// Question no 12
// var date = new Date();

// document.write("Current date: " + date + "<br>");

// var year = date.getFullYear();
// date.setFullYear(year - 100);

// alert("100 years back, it was " + date);

// Question no 13
// var age = prompt("Enter your age:");

// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);

// Question no 14
// var time = new Date()
// var month = time.getMonth();
// if(month == 8){
//     month = "September"
// }
// var numofunit = 410
// var chargesperunit = 16
// var latepayement = 350
// var NAP_beforeduedate = numofunit*chargesperunit
// var NAP_afterduedate =NAP_beforeduedate+latepayement
// document.write("K-ELECTRIC BILL<br><br>")
// document.write("Customer Name : Rania Amir<br>")
// document.write("Current Month : " + month + "<br>")
// document.write("Number of Units : "+ numofunit+ "<br>")
// document.write("Charges per Unit : " + chargesperunit+"<br><br><br>")
// document.write("Net Amount Payable Before Due Date : " + NAP_beforeduedate +"<br>")
// document.write("Late Payement Charges : " + latepayement +"<br>")
// document.write("Net Amount Payable After Due Date : " + NAP_afterduedate +"<br>")