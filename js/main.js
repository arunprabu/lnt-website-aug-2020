// external js

function submitHandler(evt){
    console.log(evt);
    // stop page refresh
    evt.preventDefault();

    var contactFormData = {
        name: document.getElementById('exampleInputName').value,
        email: document.getElementById('exampleInputEmail').value,
        phone: document.getElementById('exampleInputPhoneNo').value
    }

    console.log(contactFormData);

    // learn about HTTP methods -- GET, POST, PUT, PATCH, DELETE 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) { // successful resp
            document.getElementById("statusContainer").innerText = 'saved successfully!'
        }
    };
    xhttp.open("POST", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send(contactFormData);



}