


//---------------EXERCICES ALGO------------------



// INDIQUE SI LE CHIFFRE EST POSITIF OU NEGATIF

// const paragraphe = document.querySelector("p")
// console.log(paragraphe);

// function number() {
//     let chiffre = prompt("veuillez entrer un chiffre");

//     if (chiffre > 0) {
//         paragraphe.textContent = "Votre nombre est positif"
//     }
//     else {
//         paragraphe.textContent = "Votre nombre est négatif"
//     }
// }
// number()
// TERMINE




// MULTIPLIE LES NOMBRES EST DIT SI LE RESULTAT EST POSITIF OU NEGATIF


// const paragraphe = document.querySelector("p")
// console.log(paragraphe);

// function produit() {

//     let chiffrea = prompt("veuillez entrer un chiffre");
//     let chiffreb = prompt("veuillez entrer un chiffre");

//     let calcul = chiffrea * chiffreb

//     // console.log(calcul);
    
//     if (calcul > 0) {
//         paragraphe.textContent = "Votre nombre est positif"
//     }
//     else {
//         paragraphe.textContent = "Votre nombre est négatif"
//     }
// }
// produit()
// TERMINE



// AFFICHE LES DONNÉES RENTRÉES

// const paragraphe = document.querySelector("p")
// console.log(paragraphe);


//  function nameOrder(){

//     let name1 = prompt ("Entrez un prénom")
//     let name2 = prompt ("Entrez un prénom")
//     let name3 = prompt ("Entrez un prénom")

//     arr = [name1, name2, name3].sort()

//     return paragraphe.textContent = arr
    

// }
// nameOrder()
// TERMINE





// DIT SI LE NOMBRE EST POSITIF OU NEGATIF (prend en compte 0)
 
// const paragraphe = document.querySelector("p")
// console.log(paragraphe);

// function numberIncludeZero() {

//     let value = prompt ("Entrez un nombre")

//     if (value >= 0) {
//         paragraphe.textContent = "Votre nombre est positif"
//     }
//     else {
//         paragraphe.textContent = "Votre nombre est négatif"
//     }
// }

// numberIncludeZero()

// TERMINE




// MULTIPLIE LES DEUX NOMBRES EST DIT SI LE RESULTAT EST POSITIF OU NEGATIF(prend en compte 0)

// const paragraphe = document.querySelector("p")
// console.log(paragraphe);


//  function produitIncludeZero() {

//     let nombre1 = prompt ("Entrez un nombre")
//     let nombre2 = prompt ("Entrez un nombre")

//     let calcul = nombre1 * nombre2
    
//     if (calcul >= 0) {
//          paragraphe.textContent = "Votre nombre est positif"
//     }
//     else {
//         paragraphe.textContent = "Votre nombre est negatif"
//     }
// }
// produitIncludeZero()
// TERMINE




// INDIQUE QU' ELLE CATEGORIE EN FONCTION DE L' AGE RENTRE

// const paragraphe = document.querySelector("p")
// console.log(paragraphe);


//  function kids(){

//     let age = prompt ("Entrez votre age")

//     if(age == 6 || age == 7) {
//       return paragraphe.textContent = "Poussin";
//     }
//     if(age == 8 || age == 9) {
//      return paragraphe.textContent = "Minime";
//     }
//     if(age == 10 || age == 11) {
//       return paragraphe.textContent = "cadet";
//     }
//     if(age >= 12) {
//         return paragraphe.textContent = "grand";
//     }

// }
// kids()
// TERMINE



// AJOUTE 1 OU RETIR 1 SELON LA SUPERIORITÉE DES VALEURS OU LE TYPE
 
// function toto(){

//     let value1 = parseFloat(prompt ("Entre un nombre"));
//     let value2 = parseFloat(prompt ("Entre un nombre"));
//     let value3 = prompt ("Entre un nombre");



//     if (value1 > value2 + 4 || value3 === "ok") {
//         value1 = value1 + 1
//         const paragraphe = document.querySelector("p").textContent = value1
//     } else {
//         value1 = value1 - 1
//         const paragraphe = document.querySelector("p").textContent = value1       
//     }
// }
// toto()
// TERMINE




// INDIQUE L HEURE ENTRER + 1 MIN

// const paragraphe = document.querySelector("p")
// console.log(paragraphe);

// function hour(){    
  
//     let h = parseInt(prompt ("Entrez l' heure"))
//     let m = parseInt(prompt ("Entrez les minutes"))
    
    
//     paragraphe.textContent = `Dans une minute, il sera ${h} heure(s) ${m + 1}`
// }

// hour()
// TERMINE





// INDIQUE L HEURE ENTRER + 1 SEC

 
// const paragraphe = document.querySelector("p")
// console.log(paragraphe);


//  function second(){    
//     let h = parseFloat(prompt ("Entrez l' heure"))
//     let m = parseFloat(prompt ("Entrez les minutes"))
//     let s = parseFloat(prompt ("Entrez les secondes"))

//     paragraphe.textContent = `Dans une second, il sera ${h} heure(s), ${m} minutes(s) et ${s + 1} seconde(s)`
// }

// second()
// TERMINE




// INDIQUE LE PRIX A PAYER SELON LES COPIES
// Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes
// et 0,08 E au-delà. Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies
// effectuées et qui affiche la facture correspondante.


// const paragraphe = document.querySelector("p")
// console.log(paragraphe);

// function priceCopy(){

//     let firstPrice = 0.10
//     let secondPrice = 0.09
//     let thirstPrice = 0.08

//     let prixCopie = prompt ("Entrez le nombre de copies")


//     if (prixCopie <= 10) {
//         paragraphe.textContent = `Le prix à payer est de ${(prixCopie * firstPrice).toFixed(2)} €`
//     }
//     else if (prixCopie <= 30) {
//         paragraphe.textContent = `Le prix à payer est de ${(((prixCopie -10) * secondPrice) + 1).toFixed(2)} €`
//     }
//     else {
//         paragraphe.textContent = `Le prix à payer est de ${(((prixCopie - 30) * thirstPrice) + 2.8).toFixed(2)} €`
//     }

// }
// priceCopy()
// TERMINE
 





// FILTRE IMPOTS


//  function filterImpot(){

//     let genre= prompt("Entrez votre genre")
//     let age = prompt("Entrez votre age")



//     if ((genre == "homme") && (age > 20)) {
//         console.log("if homme");
//         const paragraphe = document.querySelector("p").textContent = `Monsieur vous devez payer des impots`
//     }
//     else if ((genre == "femme") && ((age >= 18) && (age <= 35))) {
//         const paragraphe = document.querySelector("p").textContent = `Madame vous devez payer des impots`
//     }
//     else {
//         const paragraphe = document.querySelector("p").textContent = `Vous ne devez pas payer d' impots`
//     }
// }

// filterImpot()
// TERMINE


// ELECTION
// Exercice 4.6
// Les élections législatives, en Guignolerie Septentrionale, obéissent à la règle suivante :
//  lorsque l'un des candidats obtient plus de 50% des suffrages, il est élu dès le premier tour.
//  en cas de deuxième tour, peuvent participer uniquement les candidats ayant obtenu au
// moins 12,5% des voix au premier tour.
// Vous devez écrire un algorithme qui permette la saisie des scores de quatre candidats au premier
// tour. Cet algorithme traitera ensuite le candidat numéro 1 (et uniquement lui) : il dira s'il est élu,
// battu, s'il se trouve en ballottage favorable (il participe au second tour en étant arrivé en tête à
// l'issue du premier tour) ou défavorable (il participe au second tour sans avoir été en tête au premier tour.

// function premierTour(){

//     let candidat1 = prompt("Veuillez entrer le score du Candidat 1 :");
//     let candidat2 = prompt("Veuillez entrer le score du Candidat 2 :");
//     let candidat3 = prompt("Veuillez entrer le score du Candidat 3 :");
//     let candidat4 = prompt("Veuillez entrer le score du Candidat 4 :");

//     if (candidat1 > 50) {
//         const paragraphe = document.querySelector("p").textContent = `Le 1er candidat à gagner à la majorité avec ${candidat1} % des voix`
//     }
//     else if (candidat1 > 12.5 && candidat1 > candidat2 && candidat1 > candidat3 && candidat1 > candidat4) {
//         const paragraphe = document.querySelector("p").textContent = `Le 1er candidat se trouve en ballottage favorable avec ${candidat1} % des voix`
//     }
//     else if (candidat1 > 12.5 && candidat1 < candidat2 && candidat1 < candidat3 && candidat1 < candidat4) {
//         const paragraphe = document.querySelector("p").textContent = `Le 1er candidat se trouve en ballottage défavorable avec ${candidat1} % des voix`
//     }
//     else if (candidat2 > 50 || candidat3 > 50 || candidat4 > 50) {
//         const paragraphe = document.querySelector("p").textContent = `Le 1er candidat a été battu avec ${candidat1} % des voix`
//     }
//     else{
//         const paragraphe = document.querySelector("p").textContent = `Le 1er candidat a été battu avec ${candidat1} % des voix`
//     }
// }

// premierTour()
// TERMINE








// TARIF ASSURANCE SELON AGE PERMIS ECT ...

//  function tarificationAssurance(){

//     let age = prompt("Entrez votre age :");
//     let tempsDePermis = prompt("Depuis combien de temps avez vous le permis : (en mois)");
//     let accident = prompt("Combien avez-vous eu d' accident ?");
//     let fidelite = prompt("Depuis combien de temps êtes vous assuré chez nous ? (en mois)");


//     if (fidelite > 12) {
//         const paragraphe = document.querySelector("p").textContent = "Pour votre fidélitée vous bénéficiez du barème tarifaire vert"
//     }
//     else if (age < 15 && tempsDePermis < 24 && accident == 0) {
//         const paragraphe = document.querySelector("p").textContent = "Votre barème tarifaire est rouge"
//     }
//     else if (age < 25 && tempsDePermis > 24 && accident == 0 || age > 25 && tempsDePermis < 24 && accident == 0) {
//         const paragraphe = document.querySelector("p").textContent = "Votre barème tarifaire est orange"
//     }
//     else if (age < 25 && tempsDePermis > 24 && accident == 1 || age > 25 && tempsDePermis < 24 && accident == 1) {
//         const paragraphe = document.querySelector("p").textContent = "Votre barème tarifaire est rouge"
//     }
//     else if (age > 25 && tempsDePermis > 24 && accident == 0) {
//         const paragraphe = document.querySelector("p").textContent = "Votre barème tarifaire est vert"
//     }
//     else if (age > 25 && tempsDePermis > 24 && accident == 1) {
//         const paragraphe = document.querySelector("p").textContent = "Votre barème tarifaire est orange"
//     }
//     else if (age > 25 && tempsDePermis > 24 && accident == 2) {
//         const paragraphe = document.querySelector("p").textContent = "Votre barème tarifaire est rouge"
//     }
//     else{
//         const paragraphe = document.querySelector("p").textContent = "Malheuseusement vous ne remplisez pas les conditions nécessaires pour vous inscrire dans notre assurance"
//     }
// }
// tarificationAssurance()
// TERMINE





// DERNIER EXERCICE -----NON RESOLUE------
// Ecrivez un algorithme qui, après avoir demandé un numéro de jour, de mois et d'année à
// l'utilisateur, renvoie s'il s'agit ou non d'une date valide

// function getDate(){

//     let date = prompt ("Entrez une date (au format jj/mm/aaaa) :")


//     let filterDay = new RegExp(/^[0-3][0-9]\/[0-1][0-2]\/[0-9][0-9][0-9][0-9]$/)
//     let resultatDay = filterDay.test(date)


//     let filterNoBissextile = new RegExp(/^[0-2][0-9]\/[0][2]\/[0-8][0-9][0-9][0-9]$/)
//     let resultatNoBissextile = filterNoBissextile.test(date)


//     console.log(date.slice(3, 5));


//     if (date.slice(3, 4) == ("02")) {

//         let dateDivQuatre = date.slice(6, 10) / 4

//         if (dateDivQuatre > ) {
//             const paragraphe = document.querySelector("p").textContent = date
//         }

//     }
//     else if (resultatDay && (date.slice(3, 4) !== "02")) {
//         const paragraphe = document.querySelector("p").textContent = date
//     }

// }
// NON RESOLU
// getDate()


/* 

    31 jours = janvier, mars, mai, juillet, aout, octobre, decembre
    30 jours = avril, juin, septembre, novembre
    28 jours = fevrier (/100)
    29 jours = fevrier bissextile (/4 et /400)

*/









// ------------------- EXERCICES DE BASE JS --------------------

// PRENDER ET TRANSMETTRE LA SAISIE A L ECRAN
//  let nom = prompt("Entrez votre nom :")
// let prenom = prompt("Entrez votre prenom :")

// alert (nom + ' ' + prenom)
// TERMINE





// MUTIPLIER DEUX DONNEES ET LES AFFICHER

// let num1 = prompt("Veuillez entrer un 1er nombre :");
// let num2 = prompt("Veuillez entrer un 2eme nombre :");

// let produit = num1 * num2

// alert(produit)
// TERMINE





// CONVERSION DEGRES

// let celsius = prompt("Veuillez entrer vos degrés Celsius");
// let convertionFahrenheit = (celsius * 9/5) + 32; 

// alert(convertionFahrenheit)
// TERMINE





// EX04

// let a = "100";
// let b = 100;
// let c = 1.00;
// let d = true;


// alert("Ceci est une chaine de caractères :" + a )
// b--
// a = parseInt(a) + parseInt(c)
// d = false

// alert(b)
// alert(a)
// alert(d)
// TERMINE doute sur  a = a + c





// EX05

// let ques = prompt("Entrez un nom de fruits :")

// switch (ques) {
//     case "orange":
//     case "oranges":
//         alert("Vous avez choisi orange")
//         break;
//     case "banane":
//     case "bananes":
//         alert("Vous avez choisi banane")
//         break;
//     case "cerise":
//     case "cerises":
//         alert("Vous avez choisi cerise")
//         break;
//     case "litchi":
//     case "litchis":
//         alert("Vous avez choisi litchi")
//         break;

//     default:
//         alert("Nous ne connaissons pas ce fruit")
// }

// EX06
// TERMINE




//EXO07

// let born = prompt("Entrez votre année de naissance :")

// let age = 2024 - born

// if (age >= 18) {
//     alert("Vous êtes majeur")
// }else{
//     alert("Vous êtes mineur")
// }
// TERMINE




// EXO8 ------NON RESOLU------

// let number1 = prompt("Entrez un 1er nombre");
// let operateur = prompt("Entrez un operateur");
// let number2 = prompt("Entrez un 2eme nombre");

// let result = parseInt(number1) + operateur + parseInt(number2);


// console.log(typeof operateur);

// if (operateur != ("+" || "-" || "*" || "/")){
//     alert("Erreur de saisie")
// }else{
//     alert(result)
// }
// BLOQUEE SUR L OPERATEUR




