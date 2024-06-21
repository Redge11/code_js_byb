lancerJeu()
// Exercice pour recuperer un element de HTML en JS pour le cibler avec les 3 methodes 
let inputZoneTexte = document.getElementById ("inputEcriture")    // Recuperer un element par ID 
console.log(inputZoneTexte)
let boutonValidation = document.getElementById ("btnValiderMot")   // same 
console.log (boutonValidation)

let affichageMotPropose = document.querySelector(".zoneProposition") // Recupere grace au nom de la classe 
console.log(affichageMotPropose)

let affichageScoreSpan = document.querySelector(".zoneScore span") // Recupere grace au nom de la classe + span pour etre précis sur ce qu'on cherche 
console.log(affichageScoreSpan)
//let btnRadio = document.querySelectorAll(".optionSource")  // Recupere tout les element qui sont de cette classe
//console.log(btnRadio)
//for (let i = 0;i< btnRadio; i++ ){  // Boucle pour avoir tout les elements selectionné
  //  console.log(btnRadio)
//<}
// Permet d'ajouter des attribut en HTML via JS //
/*let baliseImage = document.getElementById("logo_fixe")      // Recupere l'element ou on va ajouté des attriubut
baliseImage.setAttribute("alt","ceci est la nouvelle valeur de alt")    // Ajoute l'attribue alt + texte grace a set.Attribute
baliseImage.alt = "ceci est une image teste modifier" // 
baliseImage.classList.add("nouvelleClasse")      // ajoute une nouvelle classe en HTML  a l'element selectionné
baliseImage.classList.remove("photos")       // Supprimer un attribut en HTML

// Permet d'ajouter  du html dans le code mais plus laborieux //
let nouvelElement = document.createElement("div") // Crée une variable dans HTML qu'on nomme "div"
nouvelElement.classList.add("teste_ou_est_tu")
nouvelElement.setAttribute("alt","merci pour le fromage")
let parentElement = document.getElementById ("nom") 
parentElement.appendChild(nouvelElement)
*/
// Permet de mettre du code HTML en js //
/*let conetnuTitre = "Oseftier" // Variable qui va contenir le texte du titre qu'on ajt plus tard 
let contenuPargraphe = "Osef tier encore +" //pareil mais pour la balise <p>
// interpolation AVEC BACKSTICK + ${} et  On ecris du HTML AVEC LES BALISE et on rentre nos varibale entre ${} 
let div = ` 
<div> 
<h1> ${conetnuTitre}<h1>  
<p>${contenuPargraphe}</p>
</div>
`;
let body = document.querySelector("body") // On selectionne l'endroit on va aller le code grace a la methode .querySelector
body.innerHTML = div // et on l'envoie dans le HTML grace a la methode inner. HTML
let contenueScore = score 
let spanScore = `
 ${score}`
let  test= document.querySelector("zoneScore span")
 test.innerHTML = spanScore */

 //let monBouton = document.getElementById("btnValiderMot")
// monBouton.addEventListener("click",()=> {
   // console.log("Vous avez clicker sur le bouton")
// })
 //document.addEventListener('keydown',(e)=>{
//console.log(e.key)
// })