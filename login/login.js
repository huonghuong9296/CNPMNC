function Login(){
    console.log("hello");
    // event.preventDefault();
    var id = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(id == "" || pass == ""){
        alert("Username is required.");
        return ;
    }
    else if(id == "admin" && pass == "123"){
        // return redirectToHome();
        alert("You are logged in.");
        return;
    }
    else{
        return false;
    }
}
