function testLogin (){
    var login = document.getElementById("email");
    var pass = document.getElementById("password");

    if(login.value == "mafatimegadiaga@gmail.com" && pass.value =="passer"){
        alert("you are login successfully")
    }else{
        alert("email ou password incorect")
    }
}