//VALIDATION FORMULAIRE

//SELECTION
const societe = document.querySelector("#societe");
const contact = document.querySelector("#contact");
const adresse = document.querySelector("#adresse");
const postal = document.querySelector("#postal");
const ville = document.querySelector("#ville");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");

//ERROR-MESSAGE
const errorSociete = document.querySelector("#error-societe");
const errorContact = document.querySelector("#error-contact");
const errorAdresse = document.querySelector("#error-adresse");
const errorPostal = document.querySelector("#error-postal");
const errorVille = document.querySelector("#error-ville");
const errorEmail = document.querySelector("#error-email");
const errorNumber = document.querySelector("#error-tel");



// BTN
const btnSubmit = document.querySelector("#btn-submit");
const btnReset = document.querySelector("#btn-reset");

//EVENTLISTERNER

btnSubmit.addEventListener("click", handleClickSubmit);
// btnReset.addEventListener("click", handleClickReset);

//REGEX
const charValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const postalValid = /^([0-9]{5})+$/;
const emailValid = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
const numeroValid = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
const adresseValid = /^[0-9]+(bis )?[_a-zA-Z- ]([_a-zA-Z- ]+[_a-zA-Z- ]+[_a-zA-Z-]+)$/;



// FONCTIONS

function handleClickSubmit(e) {
    // SOCIETE
    if (societe.validity.valueMissing) {
        e.preventDefault();
        errorSociete.textContent="Entrez votre nom de société";
        errorSociete.style.color="#b93636";
    }
    else if (charValid.test(societe.value) == false) {
        e.preventDefault();
        errorSociete.textContent="Nom au mauvais format";
        errorSociete.style.color="#b93636";
    }

    // CONTACT
    if (contact.validity.valueMissing) {
        e.preventDefault();
        errorContact.textContent="Entrez votre nom";
        errorContact.style.color="#b93636";
    }
    else if (charValid.test(contact.value) == false) {
        e.preventDefault();
        errorContact.textContent="Nom au mauvais format";
        errorContact.style.color="#b93636";
    }

    // ADRESSE
    if (adresse.validity.valueMissing) {
        e.preventDefault();
        errorAdresse.textContent="Entrez votre adresse";
        errorAdresse.style.color="#b93636";
    }
    else if (adresseValid.test(adresse.value) == false) {
        e.preventDefault();
        errorAdresse.textContent="Adresse au mauvais format";
        errorAdresse.style.color="#b93636";
    }
    

    // POSTAL
    if (postal.validity.valueMissing) {
        e.preventDefault();
        errorPostal.textContent="Entrez votre code postal";
        errorPostal.style.color="#b93636";
    }
    else if (postalValid.test(postal.value) == false) {
        e.preventDefault();
        errorPostal.textContent="5 chiffres requis";
        errorPostal.style.color="#b93636";
    }

    // VILLE
    if (ville.validity.valueMissing) {
        e.preventDefault();
        errorVille.textContent="Entrez votre ville";
        errorVille.style.color="#b93636";
    }
    else if (charValid.test(ville.value) == false) {
        e.preventDefault();
        errorVille.textContent="Ville au mauvais format";
        errorVille.style.color="#b93636";
    }

    // EMAIL
    if (email.validity.valueMissing) {
        e.preventDefault();
        errorEmail.textContent="Entrez votre email";
        errorEmail.style.color="#b93636";
    }
    else if (emailValid.test(email.value) == false) {
        e.preventDefault();
        errorEmail.textContent="Format souhaiter nom@domaine.fr";
        errorEmail.style.color="#b93636";
    }

    // TEL
    if (numeroValid.test(tel.value) == false) {
        e.preventDefault();
        errorNumber.textContent="Votre numero doit contenir 10 chiffres";
        errorNumber.style.color="#b93636";
    }

}

// EVENTLISTENER INPUT

societe.addEventListener('input', checkInputLive);
contact.addEventListener('input', checkInputLive);
postal.addEventListener('input', checkInputLive);
ville.addEventListener('input', checkInputLive);
email.addEventListener('input', checkInputLive);
tel.addEventListener('input', checkInputLive);
adresse.addEventListener('input', checkInputLive);

function checkInputLive() {

    // SOCIETE
    if (charValid.test(societe.value)) {
        errorSociete.textContent="Valid";
        errorSociete.style.color="green";
        societe.style.color = "green";
    }

    // CONTACT
    if (charValid.test(contact.value)) {
        errorContact.textContent="Valid";
        errorContact.style.color="green";
        contact.style.color = "green";
    }
    
    // POSTAL
    if (postalValid.test(postal.value)) {
        errorPostal.textContent="Valid"
        errorPostal.style.color="green"
        postal.style.color = "green";
    }
    // VILLE
    if (charValid.test(ville.value)) {
        errorVille.textContent="Valid"
        errorVille.style.color="green"
        ville.style.color = "green";
    }

    // EMAIL
    if (emailValid.test(email.value)) {
        errorEmail.textContent="Valid"
        errorEmail.style.color="green"
        email.style.color = "green";
    }

    // TEL
    if (numeroValid.test(tel.value)) {
        errorNumber.textContent="Valid"
        errorNumber.style.color="green"
        tel.style.color = "green";
    }

    //ADRESSE
    if (adresseValid.test(adresse.value)) {
        adresse.style.color="green";
    }else{
        errorAdresse.textContent=""
    }

}

// EVENTRESET

//RESET ERROR-MESSAGE
const span = document.querySelectorAll(".error-msg");

console.log(span);


btnReset.addEventListener("click", clickResetSpan);

function clickResetSpan(){

    for (let i = 0; i < span.length; i++) {
        span[i].textContent=""
    }
}








