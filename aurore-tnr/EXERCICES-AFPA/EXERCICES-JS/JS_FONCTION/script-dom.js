function testerRadio() 
{
    let radio = document.getElementsByName("btnRadChoix");
    console.log(radio);
    

            for (let i=0; i<radio.length;i++) 
            {
                if (radio[i].checked) 
                {
                    document.getElementById("txtBox1").value = radio[i].value;
                }
            }
        }


// TEST NEW FENETRE 
function testerNewFenetre(){
    let maFenetre = window.open("https://www.google.com", "Lien Google" ) 
}

// TEST OBJET NAVIGATOR

var version = navigator.appVersion;
console.log(typeof version);

console.log("Le code name de votre browser est :"    + navigator.appCodeName);
console.log("Le nom ou la marque du browser est :"   + navigator.appName); 
console.log("Les informations sur la version sont :" + version); 
console.log("Le browser a comme user-agent :"        + navigator.userAgent);
console.log("");

if (version.indexOf('Win') > -1) 
{ 
    console.log("<br />Vous etes sous l'environnement Windows");
    console.log("<br />");
}

if (navigator.userAgent.indexOf('Firefox') > -1) 
{ 
console.log("Vous utilisez un navigateur FireFox");
} 
else if (version.indexOf('Chrome') > -1) 
{ 
    console.log("Vous utilisez un navigateur Chrome");
} 
else if (version.indexOf('MSIE') > -1) 
{ 
    console.log("Vous utilisez un navigateur Microsoft Internet Explorer");
} 
else 
{
    console.log("Vous utilisez un navigateur inconnu");
}

// TEST DATE

let myDate1 = new Date() ;  // Date du jour
let myDate2 = new Date(3600*24*365*40) ;    // Date depuis le 1er janvier 1970
let myDate3 = new Date(2012, 9, 19) ;
let myDate4 = new Date(2012, 9, 19, 10, 33, 12);
let myDate5 = new Date("Jan 1, 2000 00:00:00");

console.log('new Date() : ' + myDate1.toLocaleString()); 
console.log('new Date(3600*24*365*40) : ' + myDate2.toLocaleString());
console.log('new Date(2012, 9, 19) : ' + myDate3.toLocaleString());
console.log('new Date(2012, 9, 19, 10, 33, 12) : ' + myDate4.toLocaleString());
console.log('new Date("Jan 1, 2000 00:00:00") : ' + myDate5.toLocaleString());
console.log("");
let annee = 1900 + myDate1.getYear();
let mois  = myDate1.getMonth() + 1;
let jour  = myDate1.getDate();
console.log('date du jour : ' + jour + "/" + mois + "/" + annee);

console.log(new Date());
console.log(myDate1.getYear() + 1900);


// Event listener

let element = document.getElementById("button1");
        
element.addEventListener("click", function() 
{
   alert("OK");
});