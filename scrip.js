function testLogin (){
    var login = document.getElementById("email");
    var pass = document.getElementById("password"); 
    var msg_error = document.getElementById("error");
    if(login.value == "mafatimegadiaga@gmail.com" && pass.value =="passer"){
        window.location.replace("./compte/compte.html");
       // alert("you are log in successfully")
    }else{
        if(isNaN(login.value) && isNaN(pass.value)){
            msg_error.textContent = "email ou password incorect";
            msg_error.style.background = "red";
        }else{
            msg_error.textContent = "veillez remplir tous les champs";
            msg_error.style.background = "red";
        }
    }
}
