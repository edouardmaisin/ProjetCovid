function callBack(){
    console.log("action menée avec succès !");
}


function ajouterPersonne(d){
    let prenom = d.prenom.value;
    let nom = d.nom.value;
    let date = d.naissance.value;
    let sexe = d.sexe.value;

    sendRequete(prenom, nom, date, sexe);
    return false;
}

function sendRequete(prenom, nom, date, sexe){
    let xhr = new XMLHttpRequest();
    let url = `ajoutPersonne?nom=${nom}&prenom=${prenom}&naissance=${date}&sexe=${sexe}`;
    xhr.open('get', url , true );
    xhr.onload = callBack;
    xhr.send();
}


function afficherPersonnes(){
    let xhr = new XMLHttpRequest;
    xhr.open ('get', 'afficherPersonne', true);
    xhr.onload = makeSelect;
    xhr.send ();
}

function makeSelect(){
    let reponse = JSON.parse(this.responseText);

    let select = "";

    for (let id of reponse){
        select += `<option value="${id.idPersonne}">${id.idPersonne}</option>`
    }
    document.getElementById("personneTestCovid").innerHTML = select;
}


function ajouterTestCovid(p){
    let id = p.personneTestCovid.value;
    let resultat = p.resultatTestCovid.value;
    let dateT = p.dateTestCovid.value;
    let dateE = p.dateExpirationTestCovid.value;

    console.log(id,resultat,dateT, dateE);


    envoyerTest(id, resultat, dateT, dateE);
    return false;
}

function envoyerTest(id, resultat, dateT, dateE){
    let xhr = new XMLHttpRequest ();
    xhr.open('get', `http://localhost:81/ajoutTest?idPersonne=${id}&dateT=${dateT}&dateE=${dateE}&resultat=${resultat}`, true);
    xhr.onload = callBack;
    xhr.send();
}

function tableauPersonnes(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'tableauPersonnes', true);
    xhr.onload = function madeTable(){
        let reponse = JSON.parse(this.responseText);
        let tr= "";
    
        for (let id of reponse){
            tr += `<tr><td>${id.persId}</td><td>${id.persPrenom}</td><td>${id.persNom}</td><td>${id.persDateNaiss}</td><td id="couleur">${id.resulTest}</td></tr>`
        }
        document.getElementById("tbodyPersonnes").innerHTML = tr;

        /*if(document.getElementById("couleur").value = "positif"){
            document.getElementById("couleur").style.color = 'red';
        }
        */
    };
    xhr.send();
}

