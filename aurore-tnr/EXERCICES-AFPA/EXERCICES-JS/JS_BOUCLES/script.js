// EX01

// let i = 1;

// let prenoms = prompt(`Saisissez le prénoms N° ${i} (Laissez le champs vide pour finir):`);

// arrPrenoms = [];


// for (let i = 2; i > 0; i++) {
//     if (prenoms == "" || prenoms == !isNaN) {
//         break;
//     }
//     arrPrenoms.push(prenoms)

//     prenoms = prompt(`Saisissez le prénoms N° ${i} (Laissez le champs vide pour finir):`);
// }
// console.log(arrPrenoms);

// const paragraphe = document.querySelector("p").textContent = `Vous avez rentrez ${arrPrenoms.length} prénoms : ${arrPrenoms}`

// TERMINE






//EX2

// let numberN = parseFloat(prompt("Entrez un nombre"))

// for (let i = 0; numberN > i; i++) {

//     const ul = document.querySelector("ul")
//     const li = document.createElement("li")

//     li.textContent = `${numberN} est plus grand que ${i}`

//     ul.appendChild(li)
// }
// TERMINE







//EX3
 
// let number = parseFloat(prompt("Entrez les notes au format entier (touche 0 pour arreter) :"));

// arrNumber = [];

// i = 0;

// while (number != 0) {
//     if (isNaN(number)) {
//         const paragraphe = document.querySelector("p").textContent = `Erreur de saisie, veuillez entrez vos notes au bon format`
//         break;
//     }

//     arrNumber.push(number);

//     number = parseFloat(prompt("Entrez les notes au format entier (touche 0 pour arreter) :"));

//     i++

//     const sumNotes = Math.trunc((arrNumber.reduce((number, currentValue) => number + currentValue, 0)));

//     const moyenne = Math.trunc(sumNotes / arrNumber.length);
    
//     const paragraphe = document.querySelector("p").textContent = `La somme de vos notes est de ${sumNotes} pour ce trimestre votre moyenne est de ${moyenne}`
// }
// TERMINE







//EX4

// let multipleN = prompt("Entrez un nombre :");
// let multipleX = prompt("Entrez un nombre :");

// for (let i = 1; i <= multipleN; i++) {

//     let resultat = i * multipleX

//     const ul = document.querySelector("ul")
//     const li = document.createElement("li")

//     li.textContent = `${i} X ${multipleX} = ${resultat}`

//     ul.appendChild(li)

// }
// TERMINE






//EX5

// let voyelleCountFilter = prompt("Entrez un mot :")

// newRegex = /[a|e|i|o|u|y|à|è|ì|ò|ù|â|ê|î|ô|û|ä|ë|ï|ö|ü|ÿ|é]/ig

// let testRegex = voyelleCountFilter.match(newRegex)

// console.log(testRegex);


// const paragraphe = document.querySelector("p").textContent = `Votre mot contient ${testRegex.length} voyelle(s)`
// TERMINE




// -------------------FONCTIONS------------------------





// EX1

// function produit(x,y){
//     x = prompt("Entrez un premier nombre");
//     y = prompt("Entrez un second nombre");

//     resultat = x * y

//     const paragraphe = document.querySelector(".text-papillon").textContent = `Le produit de ${x} X ${y} est égal à ${resultat}`
// }

// function afficheImg(image){
//     const divPapillon = document.querySelector(".container")

//     divPapillon.innerHTML = `<img src="${image}" alt="">
//     <p class="text-papillon"></p>`

//     produit()

//     const text = document.querySelector(".text-papillon")

    
// }
// afficheImg("../asset/img/papillon.jpg")




//EX2

// function strtok(str1, str2, n){


//     str1 = prompt("Entrez vos informations: (séparées par un espace)");
//     str2 = prompt("Entrez le separateur: ");
//     n = prompt("Entrez l' indice de recherche : ");


    
    
//     const words = str1.split(" ");
    
//     const paragraphe = document.querySelector("p").textContent = `Vous avez sélectionné l' information suivante : ${words[n - 1]}`;

    
//     if (n > words.length) {
//         const paragraphe = document.querySelector("p").textContent = `Erreur de sélection veuillez choisir un indice existant`;
//     }
    
//     const data = words.join(`${str2} `);

//     const paragrapheData = document.querySelector("span").textContent = `Récapitulatif de vos données ${data}`;
    
// }
// strtok()
// TERMINÉ






// ----------------------ARRAY------------------------

// function createArray(size, values){
//     size = parseInt(prompt("Veuiller entrez la taille du tableau"));

//     const arr = new Array(size);

//     for (let i = 0; i < size ; i++) {

//         values = prompt("Veuiller entrez vos valeurs");

//         arr[i] = values
//     }

//     const paragraphe = document.querySelector("p").textContent = `Voici le contenu de votre tableau ${arr}`;
    
    
// }
// createArray()
// TERMINÉ



