// VALIDATION FORMULAIRE

// BUTTON SUBMIT
const btnValider = document.querySelector("#submit")

// PRENOM
const formPrenom = document.querySelector("#prenom")
const messageValidationPrenom = document.querySelector("#error-prenom")

// NUMERO TEL
const formNumeroTel = document.querySelector("#n-tel")
const messageValidationTel = document.querySelector("#error-n-tel")

// EMAIL
const formEmail = document.querySelector("#email")
const messageValidationEmail = document.querySelector("#error-email")

// REGEX PRENOM
const prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
// REGEX NUMERO
const numeroValid = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
// REGEX EMAIL
const mailValid = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;


btnValider.addEventListener("click", validationForm)


function validationForm(e){
    // PRENOM
    if (formPrenom.validity.valueMissing){
        // CHAMPS VIDE PRENOM
        e.preventDefault();
        messageValidationPrenom.textContent = 'Entrez votre prénom';
        messageValidationPrenom.style.color = '#8d0202';
    }
    else if (prenomValid.test(formPrenom.value) == false){
        // VALIDATION PRENOM
        e.preventDefault();
        messageValidationPrenom.textContent = 'Format incorrect';
        messageValidationPrenom.style.color = '#8d0202';
    }
    else{
        // PRENOM VALIDE
        messageValidationPrenom.textContent = 'Valide';
        messageValidationPrenom.style.color = 'green';
    }



    // TELEPHONE
    if (formNumeroTel.validity.valueMissing){
       // CHAMPS VIDE NUMERO TEL
        e.preventDefault();
        messageValidationTel.textContent = 'Entrez votre numéro';
        messageValidationTel.style.color = '#8d0202';
    }
    else if (numeroValid.test(formNumeroTel.value) == false){
        // VALIDATION NUMERO TEL
        e.preventDefault();
        messageValidationTel.textContent = '10 chiffres sont demandés';
        messageValidationTel.style.color = '#8d0202';
    }
    else{
        // NUMERO TEL VALIDE
        messageValidationTel.textContent = 'Valide';
        messageValidationTel.style.color = 'green';
    }



    //EMAIL
    if (formEmail.validity.valueMissing){
        // CHAMPS VIDE EMAIL
        e.preventDefault();
        messageValidationEmail.textContent = 'Entrez votre email';
        messageValidationEmail.style.color = '#8d0202';
    }
    else if (mailValid.test(formEmail.value) == false) {
        // VALIDATION MAIL
        e.preventDefault();
        messageValidationEmail.textContent = 'Format email voulu nom@domaine.fr'
        messageValidationEmail.style.color = '#8d0202'
    }
    else{
        // MAIL VALIDE
        messageValidationEmail.textContent = 'Valide'
        messageValidationEmail.style.color = 'green'
    }

}

// VALIDATION EN DIRECT
// PRENOM
formPrenom.addEventListener('input', inputCheck)

//NUMERO
formNumeroTel.addEventListener('input', inputCheck)

//EMAIL
formEmail.addEventListener('input', inputCheck)


function inputCheck(){
    // PRENOM
    if (prenomValid.test(formPrenom.value)){
        formPrenom.style.color = 'green';
    }else{
        formPrenom.style.color = '#8d0202';
    }

    // NUMERO
    if (numeroValid.test(formNumeroTel.value)){
        formNumeroTel.style.color = 'green';
    }else{
        formNumeroTel.style.color = '#8d0202';
    }

    // EMAIL
    if (mailValid.test(formEmail.value)){
        formEmail.style.color = 'green';
    }else{
        formEmail.style.color = '#8d0202';
    }
}