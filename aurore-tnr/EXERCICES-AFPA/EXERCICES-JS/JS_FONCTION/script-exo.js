// EX1

// function data(){

//     let values = parseFloat(prompt("Entrez vos différentes valeurs : (taper 0 pour finir)"));

//     let arrValues = [];

//     let i = 0;

//     while (values != 0) {
//         if (isNaN(values)) {
//             const paragraphe = document.querySelector("p").textContent = `Erreur de saisie, veuillez entrez vos notes au bon format`
//             break;
//         }
    
//         arrValues.push(values)

//         values = parseFloat(prompt("Entrez vos différentes valeurs : (taper 0 pour finir)"));

//         i++

//         console.log(arrValues);
    
//         const sumValues = Math.trunc((arrValues.reduce((values, currentValue) => values + currentValue, 0)));
    
//         const moyenne = Math.trunc(sumValues / arrValues.length);
        
//         const paragraphe = document.querySelector("p").textContent = `Voici les valeurs que vous avez saisie : ${arrValues}.
//         La somme de vos valeurs est de ${sumValues} pour ce trimestre votre moyenne est de ${moyenne}`
//     } 
// }
// data()
// TERMINE







// EX2

// document.write("<p>Lorem</p>")
// alert("<p>Lorem</p>")
// TERMINE







// EX3 PREMIER INPUT

// const inputName = document.querySelector("#name");
// const btn = document.querySelector("#btn");

// btn.addEventListener('click', handelclick)

// function handelclick(){
   
//     let getValue = inputName.value;

//     alert(`Vous avez saisi : ${getValue}`)
// }

// TERMINE








//EX4 NUMERO RANDOM DERNIER INPUT

// const randomNumber = document.querySelector("#random-number");
// const number = Math.trunc((Math.random() + 0.2) * 10)
// const textNumber = randomNumber.textContent = `Vous devez entrez un mot de ${number} caractères`;

// const textBox = document.querySelector("#textBox1");

// const btn1 = document.querySelector("#button1");


// btn1.addEventListener('click', verif );

// function verif(){

//     value = textBox.value.length

//     if (value > number) {
//         const filterValue = document.querySelector(".filterValue").textContent = "Trop grand";
//     }
//     else if (value < number){
//         const filterValue = document.querySelector(".filterValue").textContent = "Trop petit";
//     }
//     else if (value = number){
//         const filterValue = document.querySelector(".filterValue").textContent = "Bravo !!!";
//         setTimeout(()=> location.reload(), "600") 
//     }
//     else {
//         const filterValue = document.querySelector(".filterValue").textContent = "Oups ! il y a une erreur";
//     }
// }
// TERMINE






