document = document.getElementById("form").addEventListener("submit", submitFun1);
var formdataarr =JSON.parse(localStorage.getItem("formdata")) || [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var role = document.querySelector("#role").value;
    var skid = document.querySelector("#skid").value;

    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name === "" || email === "" || role === "" || skid === ""){
        alert("All fields are required");
    } 
    else if (!regex.test(email)) {
        alert("Invalid Email");
    } 
    else {
        alert("REGISTRATION SUCCESS");
        var formobj = {
            name: name,
            email: email,
            role: role,
            skid: skid
        };
        formdataarr.push(formobj);
        localStorage.setItem("formdata", JSON.stringify(formdataarr));
        document.querySelector("#form").reset();
        displayFun(formdataarr)
    }
}

function deleteItems() {
        // Clear localStorage items 
        localStorage.clear();
    }

function displayFun(formdataarr) {

    var count = 1;
    formdataarr.map(function (item) {
        
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.email;
        var td4 = document.createElement("td");
        td4.innerHTML = item.role;
        var td5 = document.createElement("td");
        td5.innerHTML = item.skid;
        
        tr.append(td1, td2, td3, td4, td5);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(formdataarr);
deleteItems()
