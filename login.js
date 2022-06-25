function validate(){
    var email = document.getElementById("register_email").value
    var password = document.getElementById("register_password").value

    if (email == "")
    {
        alert("email failed");
        email.focus();
        return false;
        
        
    }
    else if (email.indexOf("@") == -1)
    {
        errorMsg.innerHTML = "Email must contain @"
    }
    else if(password == '')
    {
        errorMsg.innerHTML = "Password must be filled" ;
    }
    else if(password.length < 6 || password.length > 15)
    {
        errorMsg.innerHTML = "Password must be 6-15 characters" ;
    }
}

