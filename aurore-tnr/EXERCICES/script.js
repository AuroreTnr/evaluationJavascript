// Exercice 1 : calcul du nombre de jeunes, de moyens et de vieux

const btnExo1 = document.querySelector("#exo-1");
const reponse1 = document.querySelector(".reponse1");
btnExo1.addEventListener("click", filterAge);

function filterAge() {
    //RESET REPONSE
    reponse1.textContent="";

    let values;
    let countInferieur20 = 0;
    let countSuperieur40 = 0;
    let countEntre20Et40 = 0;


    do {

        values = parseInt(prompt("Entrez les ages (pour terminer entrez 100):"));
        
        
        if (values < 20) {
            countInferieur20++;
        }
        else if (values > 40) {
            countSuperieur40++;
        }
        else{
            countEntre20Et40++;
        }

    } while (values != 100);

    reponse1.textContent= `Réponse : Il y a ${countInferieur20} personne(s) dont l' age est inférieur à 20 ans; ${countSuperieur40} personne(s) dont l' age est superieur à 40 ans et ${countEntre20Et40} personne(s) qui ont entre 20 et 40 ans`;

    return reponse1;
};

// Exercice 2 : Table de multiplication
const btnExo2 = document.querySelector("#exo-2");
const reponse2 = document.querySelector(".reponse2");
btnExo2.addEventListener("click", tableMultiplication);

function tableMultiplication(){
    //RESET REPONSE
    reponse2.textContent="";


    let value = parseInt(prompt("Entrez la table souhaitée : "));

    
    
    for (let i = 0; i <= value; i++) {
        
        let li = document.createElement("li");
        
        reponse2.appendChild(li);
        
        li.textContent = `${i} X ${value} = ${i * value}`;
        
    }
    
    
    return reponse2;
}


// Exercice 3 : recherche d'un prénom
const btnExo3 = document.querySelector("#exo-3");
const reponse3 = document.querySelector(".reponse3");
btnExo3.addEventListener("click", searchPrenom);


function searchPrenom() {
    //RESET REPONSE
    reponse3.textContent="";


    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

    let prenom = prompt("Entrez un prénom : ");

    let search = tab.indexOf(prenom);
    

    if (search < 0) {
        return reponse3.textContent = `Le prénom '${prenom}' n' a pas été trouvé`
        
    }else{
        tab.splice(search,1);
        
        tab.push("");

        console.log(tab);
    }

    return reponse3.textContent= tab;
       
}




// Exercice 4 : total d'une commande
const btnExo4 = document.querySelector("#exo-4");
const reponse4 = document.querySelector(".reponse4");
btnExo4.addEventListener("click", prixPap);

function prixPap(){
    // DATA
    let pu = parseInt(prompt("Entrez lz prix unitaire :"));
    let qtecom = parseInt(prompt("Entrez la quantité"));
    
    
    // REMISE
    let remise;
    
    
    // PRIX UNITAIRE / QUANTITÉ
    let tot = pu * qtecom;
    console.log(tot);
    
    // MONTANT DE LA REMISE
    let montantDeLaRemise = tot - (remise/100);
    console.log(montantDeLaRemise);
    
    //PRIX AVEC REMISE
    let prixAvecRemise = tot - montantDeLaRemise;
    console.log(prixAvecRemise);
    
    
    
    
    if (tot > 99 && tot < 199) {
        remise = 5;
        console.log(remise);
    }else if (tot > 200){
        remise = 10;
        console.log(remise);
    }else if (tot < 100) {
        remise = 0;
        console.log(remise);
    }
    
    // CALCUL DES FRAIS DE PORT
    else if (fraisDePort > 500) {
        fraisDePort = 0;
    }
    else if (fraisDePort< 500) {
        fraisDePort = prixAvecRemise + (2 / 100)
    }
    else if (fraisDePort< 6) {
        fraisDePort = 6;
    }else{
        return "ici"
    }
    
    
    
    // FRAIS DE PORT
    let fraisDePort = 6;
    console.log(fraisDePort);
    
    // TOTAL
    let total = prixAvecRemise + fraisDePort;
    console.log(total);
    



    reponse4.textContent = `remise ${remise}% (- ${montantDeLaRemise}€) soit ${prixAvecRemise} et frais de port ${fraisDePort} à payer : ${total}`
}
prixPap()




// Exercice 5 : vérification d'un formulaire (lien sur l' index)



// BUTTON FLOAT
// const btnFloat = document.querySelector(".btn-float");
// btnFloat.addEventListener("click", scrollTop);



