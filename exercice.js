// Code pour utiliser la condition switch pour interdire des mot
const motAcopier = "vanille"
 let motUtilisateur = prompt("Entrez le mot : " + motAcopier)
if 
    (motAcopier === motUtilisateur) {
    console.log("Bravo le mot est correcte")
} else {
    console.log("Mauvaise réponse")
}
switch (motUtilisateur) {
    case motAcopier:
       console.log("Bravo le mot est juste")
       break
    case "ntm":
    console.log("Mot interdit")
    break
    case "fdp":
    console.log("Mot interdit")
    break
    case "connard":
    console.log("Mot interdit")
    break
    case "batard":
        console.log("Mot interdit")
        break
        case "baise ta mere":
            console.log("Mot interdit")
            break
        default:
            console.log("Mauvaise reponse")
}
// Code pour declarer un tableau into demander les mot les 1 apres les autres dans la console si il sont vrai bravo +1 au compteur de points
let listeMot= ["Cachalot","Serviette","Pétunia"]
let score = 0
let motUtilisateur = prompt("Entrez le mot : " + listeMot[2])
if (listeMot[2] === motUtilisateur) {
    score += 1
    console.log("Bravo")
}
else{
    console.log("Faux")
}


 motUtilisateur = prompt("Entrez le mot : " + listeMot[0])
if (listeMot[0] === motUtilisateur) {
    score += 1
    console.log("Bravo")
}
else{
    console.log("Faux")
}
 motUtilisateur = prompt("Entrez le mot : " + listeMot[1])
if (listeMot[1] === motUtilisateur) {
    score += 1
    console.log("Bravo")
}
else{
    console.log("Faux")
}
console.log(score)
// Boucle for si on connais combien de boucle on veut realier i=indice ou index remplace le nom de la variable (ici "compteur")  i++ signifie compteur = compteur+1
for (let i = 0 ;i <500 ; i++){
    console.log(i)
}
// Boucle while si on ne connais pas le nombre de tours que la boucle doit effectuer (tant que le compteur n'est pas egale a 3 la boucle continue)
let i=0
while (i < 30) {
    console.log(i)
    i++ 
}
// Pourquoi si je fait i+10 sa marche pas crash du navigateur (ok j'ai trouver il faut mettre i=i+10) le deuxieme "+" correspond seulement a 1 apparement

// Boucle while mais avec un mot peut servir a securiser avec un mot de passe (trop bien!)
let mot =  prompt("ecrivez ok") 
    while (mot!=="ok") {
        mot=prompt("Erivez ok")
    }
console.log("bravo")

// Exercice boucle 
// BYE ELLE SONT DANS CONFIG.JS const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
// BYE ELLE SONT DANS CONFIG.JS const listePhrase =["Pas de panique" , "La vie, l’univers et le reste", "Merci pour le poisson"]

let score = 0
 let choix = prompt ("Séléctionner votre mode de jeu Mots ou Phrases")
 // Boucle pour que le message s'affiche jusqu'a que l'utilisateur choisisse entre mot et phrase
while (choix !== "Mots" && choix !== "Phrases"){
    choix = prompt("Veuillez choisir votre mode de jeu Mots ou Phrases") 
    }
// boucle for pour les 3 mots avec la variable i on utilise la fonction .length
if (choix === "Mots"){
for (let i = 0 ; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
    
if (listeMots[i] === motUtilisateur) {
    score += 1
    console.log("Bravo + 1 point")}
    else {
    console.log("Mauvaise réponse")
    }
    }
}
// deuxieme boucle for pour les 3 phrases cette fois si l'utilisateur choisie phrases meme methode que plus haut
else if (choix === "Phrases"){
    for (let i = 0 ; i < listePhrase.length; i++){
        motUtilisateur = prompt("Entrez le mot : " + listePhrase[i])
        if (listePhrase[i] === motUtilisateur){
            score +=1
            console.log ("Bravo + 1 Point")
        }else {
            console.log("Mauvaise réponse")
        }
    }
}

console.log ("Votre score final est de " + score)

// Introdution au fonction 
function retournerMessageScore(score,nombreQuestion){
    let message = "votre score est de " + score + "sur"  + nombreQuestion
    return message
}
function CalculeTVA (prixHT,TauxTVA){
    return prixHT * TauxTVA /100
}
// Apeller la fonction retournerMessageScore qui a pour parametre le score et le nombre de question et qui renvoie le messahe avec le score sur le nombre de question
let nouveauMessage = retournerMessageScore(5,10)
console.log(nouveauMessage)

// apeller la fonction CalculeTVA avec un prix de 300€ et une TVA de 20%
let TVAFrance = CalculeTVA(300,20)
console.log (TVAFrance)
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrase =["Pas de panique" , "La vie, l’univers et le reste", "Merci pour le poisson"]*/

// la fonction qui permet de dmeander au joueur d entre mots et phrases avec la boucle while
function choisirPhrasesouMots (){
    let choix = prompt ("Séléctionner votre mode de jeu Mots ou Phrases")
 // Boucle pour que le message s'affiche jusqu'a que l'utilisateur choisisse entre mot et phrase
while (choix !== "Mots" && choix !== "Phrases"){
    choix = prompt("Veuillez choisir votre mode de jeu Mots ou Phrases") 
}
return choix
}


// Fonction qui permet de lancer la boucle de jeu for qu'on a ecris plus haut  on utilise liste proposition pour utiliser la fonction du haut avec la boucle while qui demande au joueur de choisir entre phrases et mot
function lancerBoucleDeJeu (listeProposition){
    
    for (let i = 0 ; i < listeProposition.length; i++) { // La boucle permet de parcourir tout les mot de la listes et de demander au joueur
       let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i])
        
    if (listeProposition[i] == motUtilisateur) { // Si le mot proposé et le mot de l'utilisateur sont identique le score augmente de 1 
        score += 1
        console.log("Bravo + 1 point")}
        else {
        console.log("Mauvaise réponse") // Sinon on affiche mauvaise reponse et pas de point en +
        }
     }

     console.log(score)

     return score
}
// Et enfin la fonction lancer jeu qui regroupe toute les fonction pour faire fonctionner le jeu elle execute les autre fonction

//Fonction qui affiche le resultat 

  //Tentative de faire une fonction random pour melanger les mots qui s'affiche

 
    //variable score en local 
let nbMotsProposes = 0 // varibale nbmot proposé en local 

let choix = choisirPhrasesouMots() // On apelle la fonction choisirPhrasesouMots() qui sert a demander au joueur entre mots  et phrases 

if (choix === "Mots") {
    lancerBoucleDeJeu(listeMots) // si l'utilisateur choisis mots on lui envoie la liste de mot
    nbMotsProposes = listeMots.length // on definie la varibale nbMots Proposes grace a listeMots.length qui nous renvoie le nombre de mot dans le tableau

    
    else { // sinon on apelle la meme fonction mais avec les phrases biensur l'utilisateur ne peux choisir qu'entre mots et phrases grace a une boucle while
      choix =  lancerBoucleDeJeu(listePhrase)
       // nbMotsProposes = listePhrase.length
    }
  

 }
 // On apelle la fonction jeu qui apelle les autres fonction
 lancerJeu()

let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);
console.log(baliseZoneProposition.clientHeight)
let baliseZonePropositionSpan = document.querySelector("#zoneProposition span")
console.log(baliseZonePropositionSpan)
let listeInputRadio = document.querySelectorAll(".zoneChoix input")
console.log(listeInputRadio);
for(let i = 0; i< listeInputRadio.length; i++){
    console.log(listeInputRadio[i]);
}
  if (optionSource !== 1){
    AfficherProposition(listeProposition=listePhrase[i])
 } else {
    AfficherProposition(listeProposition)
 }
       


