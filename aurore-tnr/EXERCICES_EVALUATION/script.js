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

    // ARRAY
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

    let prenom = prompt("Entrez un prénom : ");
    prenom = prenom.trim();
    
    let trouve = false;
    
    tab.forEach((value) => {
        if (value.toLowerCase() === prenom.toLowerCase()) {
            trouve = true;
            console.log(value.toLowerCase());
            console.log(value);
            console.log(prenom);
            
            tab.splice(tab.indexOf(value), 1);
            tab.push(" "); // Ajoute un espace à la fin
            
            reponse3.textContent = tab.join(", "); // Affiche le tableau
        }
    });
    
    if (!trouve) {
        console.log("else");
        reponse3.textContent = `Le prénom '${prenom}' n'a pas été trouvé`;
    }   

       
}






// Exercice 4 : total d' une commande


const btnExo4 = document.querySelector("#exo-4");
const reponse4 = document.querySelector(".reponse4");
btnExo4.addEventListener("click", prixPap);

function prixPap(){
    // DATA
    let pu = parseInt(prompt("Entrez le prix unitaire :"));
    let qtecom = parseInt(prompt("Entrez la quantité"));
    
    
    // PRIX UNITAIRE / QUANTITÉ
    let tot = pu * qtecom;
    console.log(tot);


    // VARIABLES
    let pourcentRemise;
    let remise;
    let prixAvecReduction;
    let fraisDePortPoucent;
    let fraisDePort;
    let prixTotal;

    
    
    if (tot >= 100 && tot <= 200) {
        // POURCNTAGE REMISE
        pourcentRemise = 5
        // PRIX REMISE
        remise = tot * pourcentRemise/100;

        // PRIX AVEC REDUCTION
        prixAvecReduction = (tot - remise);

        
    }else if (tot > 200){
        // POURCNTAGE REMISE
        pourcentRemise = 10

        // PRIX REMISE
        remise = tot * pourcentRemise/100;

        // PRIX AVEC REDUCTION
        prixAvecReduction = tot - remise;

        
    }else if (tot < 100) {
        // POURCNTAGE REMISE
        pourcentRemise = 0

        // PRIX REMISE
        remise = 0

        // PRIX AVEC REDUCTION
        prixAvecReduction = tot;


    }

    
    
    // CALCUL DES FRAIS DE PORT
    if (prixAvecReduction > 500) {
        fraisDePortPoucent = 0;
        fraisDePort = prixAvecReduction*fraisDePortPoucent/100;
        prixTotal = prixAvecReduction + fraisDePort;
    }
    else if (prixAvecReduction < 500) {
        fraisDePortPoucent = 2;
        fraisDePort = prixAvecReduction*fraisDePortPoucent/100;
        if (fraisDePort < 6) {
            fraisDePort = 6;
        }
        prixTotal = prixAvecReduction + fraisDePort;

    }
    
    


    //RESULT
    reponse4.textContent = `remise ${pourcentRemise.toFixed()}% (- ${remise.toFixed(2)}€) soit ${prixAvecReduction.toFixed(2)} et frais de port ${fraisDePortPoucent.toFixed()}% (de ${prixAvecReduction.toFixed(2)}) soit + ${fraisDePort.toFixed(2)} ; à payer : ${prixAvecReduction.toFixed(2)} + ${fraisDePort.toFixed(2)} = ${prixTotal.toFixed(2)} €`

    
}


//TEST
// Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €

// Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.

// Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €

// Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €EXEMPLE Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €. 






// Exercice 5 : vérification d'un formulaire (lien sur l' index)







// BUTTON FLOAT
const btnFloat = document.querySelector(".btn-float");

btnFloat.addEventListener("click", scrollTop);
function scrollTop(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}


