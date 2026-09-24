// Question no 3
// let buttons = document.querySelectorAll("button");

// console.log(buttons);
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         console.log("hello");
//         console.log(buttons[i].parentNode.parentNode.remove());
//     })
// }

// Question no 5
let increasebtn = document.querySelector("#increment");

increasebtn.addEventListener("click", function() {
    let counter = document.querySelector("#counter");
    
    counter.innerHTML++;
}   )

let decreasebtn = document.querySelector("#decrement");

decreasebtn.addEventListener("click", function() {
    let counter = document.querySelector("#counter");
    
    counter.innerHTML--;
    if(counter.innerHTML < 0) {
        counter.innerHTML = 0;}
}   )