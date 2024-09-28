// Exercice 1 : calcul du nombre de jeunes, de moyens et de vieux

const btnExo1 = document.querySelector("#exo-1");
const reponse1 = document.querySelector(".reponse1");
btnExo1.addEventListener("click", filterAge);

function filterAge() {
    //RESET REPONSE
    reponse1.textContent="";


    let countInferieur20 = 0;
    let countSuperieur40 = 0;
    let countEntre20Et40 = 0;


    do {

        values = parseInt(prompt("Entrez les ages :"));
        
        
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


// Exercice 3 : recherche d'un prénom
const btnExo3 = document.querySelector("#exo-3");
const reponse3 = document.querySelector(".reponse3");
btnExo3.addEventListener("click", searchPrenom);


// Exercice 4 : total d'une commande
const btnExo4 = document.querySelector("#exo-4");
const reponse4 = document.querySelector(".reponse4");
btnExo4.addEventListener("click", prixPap);


// Exercice 5 : vérification d'un formulaire (lien sur l' index)



// BUTTON FLOAT
const btnFloat = document.querySelector(".btn-float");
btnFloat.addEventListener("click", scrollTop);



