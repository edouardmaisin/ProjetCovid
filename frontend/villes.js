function initVilles(){
    let xhr = new XMLHttpRequest;
    xhr.open('get', 'http://localhost:81/afficherVilles', true);
    xhr.onload = getListe;
    xhr.send();
}

function getListe(){
    let reponse = JSON.parse(this.responseText);
    let ul = "";

    for(let ville of reponse){
    ul += `<li>${ville.vilLib}</li>`;
    }

document.getElementById("listeVilles").innerHTML = ul;
}

function ajouterVille(f){
    let ville = f.ville.value;
    let code = f.codePostal.value;

    envoyerRequete(ville, code);
    return false;
}

function envoyerRequete(ville, code){
    let xhr = new XMLHttpRequest();
    xhr.open('get', `http://localhost:81/ajoutVille?libVille=${ville}&codePostal=${code}`, true);
    xhr.onload = callBack;
    xhr.send()
    
}

function callBack(){
    console.log("action menée avec succès !");
}