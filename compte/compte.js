function addCompte(){

    var formdata = readForm();
    insertCompte(formdata)

}

function readForm(){
    var formdata = {};
    formdata ['numCompte'] = document.getElementById("numCompte").value;
    formdata ['numAgence'] = document.getElementById("numAgence").value;
    formdata ['cleRib'] = document.getElementById("numCompte").value;
    formdata ['nom'] = document.getElementById("nom").value;
    formdata ['prenom'] = document.getElementById("prenom").value;
    formdata ['typeclient'] = document.getElementById("typeclient").value;
    formdata ['email'] = document.getElementById("email").value;
    formdata ['tel'] = document.getElementById("tel").value;
    formdata ['salaire'] = document.getElementById("salaire").value;
    formdata ['solde'] = document.getElementById("solde").value;

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
 cell4.innerHTML = data.nom;
 cell5 = newCompte.insertCell(4); 
 cell5.innerHTML = data.prenom;
 cell6 = newCompte.insertCell(5); 
 cell6.innerHTML = data.typeclient;
 cell7 = newCompte.insertCell(6); 
 cell7.innerHTML = data.email;
 cell8 = newCompte.insertCell(7); 
 cell8.innerHTML = data.tel;
 cell9 = newCompte.insertCell(8); 
 cell9.innerHTML = data.salaire;
 cell10 = newCompte.insertCell(9); 
 cell10.innerHTML = data.solde;


}