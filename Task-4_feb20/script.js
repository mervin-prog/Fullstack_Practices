
document = document.getElementById("form").addEventListener("submit", submitFun);
function submitFun(e) {
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var phone = document.querySelector("#phone").value;
    var email = document.querySelector("#email").value;

    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name === "" || email === "" || phone === ""){
        alert("All fields are required");
    } 
    else if (!regex.test(email)) {
        alert("Invalid Email");
    } 
    else {
        alert("Thank You for Subscribing !");
    }
}

