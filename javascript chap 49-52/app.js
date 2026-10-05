// Question no 1
// function checkAddress(event){
//     event.preventDefault();
    
//     var emailInput = document.getElementById("email").value;
    
//     document.getElementById("result").innerHTML = "<p>Email: " + emailInput + "</p>";
// }

// Question no 2
// function showDetails(event){
//    var moreDetails = "Product Name: Example Product<br>Price: $19.99<br>Availability: In Stock<br>Description: This is a sample product description.<br>Manufacturer: Example Manufacturer<br>Rating: 4.5/5";
//     document.getElementById("details").innerHTML = moreDetails;
// }

// Question no 3
function addData(){
    let name = document.getElementById("name").value;
    let className = document.getElementById("class").value;
    
    document.querySelector("tbody").innerHTML += "<tr><td>" + name + "</td><td>" + className + "</td><td><button>Delete</button></td></tr>";
}

let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", function() {
        console.log(buttons[i].parentNode.parentNode.remove());
    })
 }