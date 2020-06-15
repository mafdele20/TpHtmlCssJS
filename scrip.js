function myFunction() {

    const email = loginbox.email.value;
    const password = loginbox.password.value;
    

    if (email === "gadiaga@simplon.co" && password === "simplon") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        document.getElementById("msg-error").innerHTML = "email ou mot de passe incorrect ";
        msgError.style.opacity = 1;
    }
}