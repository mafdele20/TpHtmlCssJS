
function addCompte(){
    if(document.getElementById("numCompte").value.trim()=="" && document.getElementById("idclient").value.trim()==""
    && document.getElementById("numAgence").value.trim()=="" && document.getElementById("solde").value.trim()==""
    && document.getElementById("dateO").value.trim()=="" && ((document.getElementById("epargne").checked == false && (document.getElementById("simple").checked == false || document.getElementById("xeweul").checked == false))
    || document.getElementById("courant").checked == false ||document.getElementById("bloque").checked == false) ){
       afficheTout()
    }else if(document.getElementById("numCompte").value.trim()==""){

        document.getElementById("champs2").style.display= "block";
 
        document.getElementById("champs1").style.display= "none";
        document.getElementById("champs3").style.display= "none";
        document.getElementById("champs4").style.display= "none";
        document.getElementById("champs5").style.display= "none";
        
    }else if(document.getElementById("idclient").value.trim()==""){

        document.getElementById("champs1").style.display= "block";

        
        document.getElementById("champs2").style.display= "none";
        document.getElementById("champs3").style.display= "none";
        document.getElementById("champs4").style.display= "none";
        document.getElementById("champs5").style.display= "none";
        
    }else if(document.getElementById("numAgence").value.trim()==""){

        document.getElementById("champs3").style.display= "block";

        
        document.getElementById("champs1").style.display= "none";
        document.getElementById("champs2").style.display= "none";
        document.getElementById("champs4").style.display= "none";
        document.getElementById("champs5").style.display= "none";


    }else if(document.getElementById("solde").value.trim()==""){

    document.getElementById("champs4").style.display= "block";
    
    document.getElementById("champs1").style.display= "none";
    document.getElementById("champs3").style.display= "none";
    document.getElementById("champs2").style.display= "none";
    document.getElementById("champs5").style.display= "none";

   }else if(document.getElementById("dateO").value.trim()==""){

    document.getElementById("champs5").style.display= "block";

    
    document.getElementById("champs1").style.display= "none";
    document.getElementById("champs3").style.display= "none";
    document.getElementById("champs4").style.display= "none";
    document.getElementById("champs2").style.display= "none";

    }else if((document.getElementById("epargne").checked == false && (document.getElementById("simple").checked == false || document.getElementById("xeweul").checked == false))
    || document.getElementById("courant").checked == false ||document.getElementById("bloque").checked == false  ){

        document.getElementById("champs6").style.display= "block";
    
        document.getElementById("champs1").style.display= "none";
        document.getElementById("champs3").style.display= "none";
        document.getElementById("champs4").style.display= "none";
        document.getElementById("champs5").style.display= "none";
        document.getElementById("champs2").style.display= "none";
    
        }else{
        var formdata = readForm();
        insertCompte(formdata);
        annulChamp();
    }
    

}

function afficheTout() {
    
    document.getElementById("champs5").style.display= "block"; 
    document.getElementById("champs1").style.display= "block";
    document.getElementById("champs3").style.display= "block";
    document.getElementById("champs4").style.display= "block";
    document.getElementById("champs2").style.display= "block";
    document.getElementById("champs6").style.display= "block";

}
function annulTout() {
    
    document.getElementById("champs5").style.display= "none"; 
    document.getElementById("champs1").style.display= "none";
    document.getElementById("champs3").style.display= "none";
    document.getElementById("champs4").style.display= "none";
    document.getElementById("champs2").style.display= "none";
    document.getElementById("champs6").style.display= "none";
    document.getElementById("epargnetype").style.display = "none"
    document.getElementById("frais").style.display = "none"  

}


function requiere(params) {
    if( params.value.trim() == ""){
        document.getElementById("champs").style.display = "block"
    }
 
}

function readForm(){
    var formdata = {};
    formdata ['idclient'] = document.getElementById("idclient").value;
    formdata ['numCompte'] = document.getElementById("numCompte").value;idclient
    formdata ['numAgence'] = document.getElementById("numAgence").value;
    formdata ['cleRib'] = document.getElementById("numCompte").value+ " "+"cmp";
    formdata ['nom'] = document.getElementById("nom").value;
    formdata ['prenom'] = document.getElementById("prenom").value;
 //   formdata ['typeclient'] = document.getElementById("typeclient").value;
    formdata ['email'] = document.getElementById("email").value;
    formdata ['tel'] = document.getElementById("tel").value;
    formdata ['salaire'] = document.getElementById("salaire").value;
    formdata ['solde'] = document.getElementById("solde").value;
    formdata ['dateO'] = document.getElementById("dateO").value;
    formdata ['agio'] = document.getElementById("agio").value;
    formdata ['epargne'] = document.getElementById("epargne").value;
    formdata ['courant'] = document.getElementById("courant").value;
    formdata ['bloque'] = document.getElementById("bloque").value;

    return formdata;
}
function insertCompte(data){
    
    var tab   = document.getElementById("listecompte").getElementsByTagName("tbody")[0];
    var newCompte = tab.insertRow(tab.length);
    cell1 = newCompte.insertCell(0); 
    cell1.innerHTML = data.numCompte;
    cell2 = newCompte.insertCell(1); 
    cell2.innerHTML = data.numAgence;
    cell3 = newCompte.insertCell(2); 
    cell3.innerHTML = data.cleRib;
    cell4 = newCompte.insertCell(3); 
    cell4.innerHTML = data.dateO;
    cell5 = newCompte.insertCell(4); 
    cell5.innerHTML = data.solde;
    cell6 = newCompte.insertCell(5); 
    cell6.innerHTML = data.epargne +""+ data.courant+""+data.bloque ;
    cell7 = newCompte.insertCell(6) ; 
    cell7.innerHTML = data.agio;
    cell8 = newCompte.insertCell(7); 
    cell8.innerHTML = data.nom+" "+data.prenom+""+data.idclient



}
//Pour masquer les infos client  s'il existe:
function masquerClient(){
        
        document.getElementById("masquer").style.display = "none";
        document.getElementById("identifiant").style.display="block";
        document.getElementById("nouveau").checked = false;
}
//Pour afficher les infos client s'il est nouveau :

function afficheElement(){
        
    document.getElementById("masquer").style.display = "block";
    document.getElementById("identifiant").style.display="none";
    document.getElementById("ancien").checked = false;


}

 function annulChamp(){
     document.getElementById("numCompte").value = "";
     document.getElementById("numAgence").value = "";
     document.getElementById("nom").value = "";
     document.getElementById("prenom").value = "";
     //document.getElementById("typeclient").value = "";
     document.getElementById("email").value = "";
     document.getElementById("tel").value = "";
     document.getElementById("salaire").value = "";
     document.getElementById("solde").value = "";
     document.getElementById("epargne").value ="";
     document.getElementById("courant").value ="";
     document.getElementById("bloque").value="";
     document.getElementById("simple").checked = false
     document.getElementById("xeweul").checked = false
     annulTout();

}

function salary(){
        document.getElementById("employeur").style.display ="block"  
        document.getElementById("nonsalaire").checked = false    
        document.getElementById("entrepriseC").checked = false  
}

function entreprisee(){
    document.getElementById("employeur").style.display ="none"    
    document.getElementById("nonsalaire").checked = false   
    document.getElementById("salarie").checked = false  
}

function non_salary(){
    document.getElementById("employeur").style.display ="none"  
    document.getElementById("entrepriseC").checked = false    
    document.getElementById("salarie").checked = false           
}
function epargnee(){
    document.getElementById("epargnetype").style.display = "block"
    document.getElementById("frais").style.display = "block"  
    document.getElementById("epargne").value ="epargne" 
    document.getElementById("courant").value =""
    document.getElementById("bloque").value = "" 

    document.getElementById("courant").checked = false   
    document.getElementById("bloque").checked = false      
}
function courante(){
    document.getElementById("epargnetype").style.display = "none"  
    document.getElementById("frais").style.display = "none"   
    document.getElementById("courant").value ="courant" 
    document.getElementById("epargne").value =""   
    document.getElementById("bloque").value = "" 
    document.getElementById("bloque").checked = false   
    document.getElementById("epargne").checked = false  
}

function bloquee(){  
    document.getElementById("epargnetype").style.display = "none"   
    document.getElementById("frais").style.display = "block"   
    document.getElementById("bloque").value = "bloque"   
    document.getElementById("courant").value ="" 
    document.getElementById("epargne").value ="" 
    document.getElementById("courant").checked = false   
    document.getElementById("epargne").checked = false        
}

function xeweule(){
    document.getElementById("simple").checked = false      
}
function simplee(){
    document.getElementById("xeweul").checked = false      
}

function deconnexion(){
    var conf = confirm("voulez vous quitter ?")
    if(conf == true){
      window.location.replace("../index.html")
    }else{
      event.preventDefault();
    }
}