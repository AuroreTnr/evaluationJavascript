// Exercice 1 : calcul du nombre de jeunes, de moyens et de vieux
let values = 0;

function filterAge() {

    values = parseInt(prompt("Entrez les ages :"));

    let inferieur20 = 0;
    let superieur40 = 1;
    let entre20Et40 = 0;


    if (values < 20) {
        inferieur20 + 1;
    }
    else if (values < 40) {
        superieur40 + 1;
    }
    else{
        entre20Et40 + 1;
    }

   console.log(inferieur20);
   
    
    
}

do {

    filterAge();
    
} while (values != 100);

