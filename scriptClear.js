function afficherResultat (score,nbMotsProposes) {
    let resultatTexte = "Votre score est de "+ score + " sur " + nbMotsProposes
    return resultatTexte
}
// Fonction qui affiche la proposition a l'endroit demander dans le html donc zone proposition(parametre liste proposition)
function AfficherProposition (proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
 zoneProposition.innerHTML = proposition

 }
 // Fonction pour tirer une valeur random dans les liste
 function propositionRandom(liste){
    let rand = Math.random()*listeMots.length| 0
    let rValue=liste[rand]
    return rValue
   
 }
 
function lancerJeu() {             // Fonction qui lance le jeu elle apelle toute les fonction elle fait tout le jeu est une fonction et regrroupe les variable local au jeu
    
 let score = 0
 let i = 0

 let inputEcriture =document.getElementById("inputEcriture")                  // recuperer la zone d'ecriture 
  let monBouton = document.getElementById("btnValiderMot")                 // recuperer le bouton valider 
  let resultatJoueur = document.querySelector(".zoneScore span")            // recuperer la zone score 
  let listeProposition = listeMots               // Liste proposition a la base est la liste de mot dans config elle peut se transofrmer en liste phrases si l'utilisateur choisis phrases
  let zoneProposition = document.querySelector(".zoneProposition")
  
  /*function remplirTableau (propositionRandom(listeMots)){
    listeVide = []
    listeVide.push(propositionRandom(listeMot))
    console.log(listeVide)
}
*/
AfficherProposition(propositionRandom(listeProposition))     // Pas sur peut etre le premier mot afficher a l'entré du jeu

// Ecouteur d'evenement quand on click sur le bouton le mot suivant s'affiche et si le mot proposé est identique au mot ecris score augmente
monBouton.addEventListener("click",function() {
    console.log(inputEcriture.value)
    if (inputEcriture.value === zoneProposition){
        score++
        console.log(score)
    }
    i++
    afficherResultat(score,i)
    inputEcriture.value = ""
    // Si il n'ya plus de mot dans la liste le jeux se termine et le bouton se deactive 
       if (listeProposition[i] == undefined){
           AfficherProposition("Game Over")
           monBouton.disabled = true
       } else {
        // sinon le jeux continue et le score evolue en fonction 
           AfficherProposition(propositionRandom(listeProposition))  
           resultatJoueur.innerHTML = afficherResultat(score,i)
           console.log(resultatJoueur)
           
 }
 
})

 // Boucle pour parcourir les bouton radio et les recuperer pour les mettre dans une variable js
 let baliseChoix = document.querySelectorAll(".optionSource input")
 for (let i =0; i < baliseChoix.length ; i++) {
    // Ecouteur qui detecte quand on change entre mots et phrases si la valeur du bouton radio est 1 cad Mots on lance le jeux avec des mots et si c'est 2 c'est phrases 
    baliseChoix[i].addEventListener("change",function(event){
        console.log(event)
        if (event.target.value === "1"){
            listeProposition=listeMots
        } else {
            listeProposition=listePhrase
        }
        AfficherProposition(propositionRandom(listeProposition))
        afficherResultat(score,i)
    })
 }

 //  ecouteur pour le formulaire en html qui permet de supprimer le comportement par defaut du formulaire et donc d'empecher que la page recharge quand on appuie sur entré dans le jeux
}
let monForm = document.getElementById("monForm").addEventListener('click',function(event){
    event.preventDefault()
})
let formPartage = document.getElementById("formPartage").addEventListener('submit',function(event){
    event.preventDefault()
    const nom = document.getElementById("nom").value
    const email = document.getElementById("email").value
    console.log(nom)
    console.log(email)
})
