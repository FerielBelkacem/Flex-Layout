var x; //variable x 
const pi = 3.14; // constante pi

x = 18 ;
x == 18

// si x > 18 alors "tu es adulte" sinon "tu es mineur"
// > =/=  <=
// >=  =/=  <
// <   =/=  >=
// <=  =/=  >

if(x >= 19){
    console.log("tu es adulte");
}else{
    console.log("tu es mineur");
} 

// if jour == dimanche alors "Boujour dimanche" sinon si jour == lundi alors "bonjour lundi "... 
// sinon si jour == samedi "Boujour Samedi"

// l'égalité avec ==
var jour;

jour ="samedi";

if (jour == "dimanche"){
    console.log("Bonjour ", jour);
   }else if( jour =="lundi"){
    console.log("Bonjour" , jour);
      }else if (jour == "mardi"){
          console.log("Bonjour" , jour);
             }


switch (jour){
    case  "lundi" : console.log("Bonjour, c'est" , jour);
       break ;
    case  " mardi" : console.log("Bonjour, c'est" , jour);
       break ;
    case  "mercredi" : console.log("Bonjour, c'est" , jour);
       break ;
    case  "jeudi" : console.log("Bonjour, c'est" , jour);
       break ;
    case  "vencredi" : console.log("Bonjour, c'est" , jour);
       break ;
    case    "samedi" : console.log("Bonjour, c'est" , jour);
       break ; 
    dafault : "jour invalide" ;
}

// si heure >= 18 alors "Bonsoir" sinon "Bonjour"
let heure =20;
if (heure >= 18 ){
    var x = "feriel"
    if (heure == 20){
      console.log("Bonsoir" , x);
    }  
}
else {console.log("Bonjour" , x);}


let prenom;
prenom = ["cerine","zahra","ilyes","haroun"];
// pour ajouter un element dans un tableau en travaille avec le push() , ajouter a la fin du tableau
prenom.push("feriel", "anis");
console.log(prenom);

// pour supprimer un element d'un tableau en travaille avec le pop(), supprime le derinier element 
const prenomsup = prenom.pop()
console.log(prenomsup);
console.log(prenom);
// retourne une partie d'un tableau , slice(start, end+1)
let nouveau = prenom.slice(1,6)
console.log(nouveau);

//combine deux tabs 
let filles = ["cerine", "zahra"];
let garçons = ["ilyes", "haroun"];

let web1 = filles.concat(garçons);

console.log(web1);

// ajouter un element au debut du tab
web1.unshift("feriel");
console.log(web1);

let web = web1.shift()
console.log(web1);
console.log(web);

let index = web1.indexOf("cerine");
console.log(index);
//index n'existe pas -1
let index1 = web1.indexOf("feriel");
console.log(index);

let personne = {
    nom : "Belkacem",
    prenom : "feriel",
    âge: 25,
    profession: "Ingénieur",
    status:["satisfait", "Non sta"],
    wilaya :{
           codepostale: "0021" ,
           adresse : "algiers,algeria "
           }
}
console.log(personne);
console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.wilaya.adresse);
