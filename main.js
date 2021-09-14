/**
 *
 * Qu'est ce que le DOM
 *
 *
 * Le Document Object Model ou DOM (pour modèle objet de document) est une interface
 * de programmation pour les documents HTML, XML et SVG.
 * Il fournit une représentation structurée du document sous forme d'un arbre et définit
 * la façon dont la structure peut être manipulée par les programmes,
 * en termes de style et de contenu.
 * Le DOM représente le document comme un ensemble de nœuds et d'objets possédant des propriétés et des méthodes.
 * Les nœuds peuvent également avoir des gestionnaires d'événements qui se déclenchent lorsqu'un événement se produit.
 * Cela permet de manipuler des pages web grâce à des scripts et/ou des langages de programmation.
 * Les nœuds peuvent être associés à des gestionnaires d'événements.
 * Une fois qu'un événement est déclenché, les gestionnaires d'événements sont exécutés.
 *
 */

// representation de la fenêtre
// elle contient des propriété comme la hauteur, la largeur...
// des méthodes comme ouvrir une nouvelle fenetre, la fermer etc...
// console.log(window);

// representation du document
// console.log(document);

const element = document.getElementById("titre");

// on accède à la propriété textContent
// console.log(element.textContent);
// on modifie la propriété textContent
element.textContent = "J'ai été changé en JS";

// j'accède à l'objet style et a la propriété color
// console.log(element.style.color);

// je modifie la valeur de color
// element.style.color = 'green';

// ici on peut acceder aux class de l'élément
console.log(element.className);
// on peut venir modifier les class de l'élément
// ceci écrase la valeur précédente
element.className = "un-autre-class";

// pour garder les class précédentes on devrait utiliser quelque chose danse ce genre
element.className = element.className + " bg-white";
// ça fonctionne comme attendu
console.log(element.className);
//par contre pour retirer une class on devra faire un traitement sur la chaine de caractère ce qui n'est pas forcement nécessaire puisque quelque chose est deja prévu pour ce cas
element.className = element.className
  .split(" ")
  .filter((el) => el !== "red")
  .join(" ");
// ceci aura pour effet de retirer la class red

// la version deja implémentée est la suivante
element.classList.remove("red");
console.log(element.className);

// on préfèrera passer par classList plutot que className
// classList possède déjà des méthodes pour ajouter, supprimer, remplacer une class ou vérifier si une class est présente sur un élément
element.classList.add("une-class"); // pour ajouter une class
element.classList.remove("un-autre-class"); // pour retirer une class
element.classList.contains("une-class"); // pour vérifier la présence une class

element.classList.add("orange");

// localStorage.setItem('theme', 'dark');
// localStorage.setItem('username', 'David');
// on recupere le username stocké dans le localstorage
const username = localStorage.getItem("username") ?? "Inconnu";
element.textContent = "Bonjour " + username;

const theme = localStorage.getItem("theme") ?? "dark";
document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";

const elementsByClassName = document.getElementsByClassName("para");
// console.log(elementsByClassName);

const elementsByTagName = document.getElementsByTagName("p");
// console.log(elementsByTagName);

// querySelector attend en paramètre un selecteur CSS qui correspond à l'élément désiré
// querySelector renvoie le premier qui correspond
const querySelector = document.querySelector(".para");
console.log(querySelector);
// querySelectorAll attend en paramètre un selecteur CSS qui correspond aux éléments désirés
// querySelectorAll renvoie tout les éléments qui correspondent
const querySelectorAll = document.querySelectorAll(".para");
console.log(querySelectorAll);

const section = document.querySelector("section");
const firstParaInSection = section.querySelector("p");

console.log(firstParaInSection);

/**
 *
 * stocker dans des variables les éléments suivants
 *
 * 1. section avec l'id sec-1
 * 2. l'élément nav
 * 3. les éléments li du menu (nav)
 * 4. les paragraphes de la 2ème section
 * 5. la liste du footer
 *
 */

let sec1 = document.querySelector("#sec-1");
let navElement = document.querySelector("nav");
let liInNavElements = document.querySelectorAll("nav li");
let pInLastSectionElements = document.querySelectorAll(
  "main section:last-child p"
);
let footerUlElement = document.querySelector("footer ul");

console.log(sec1);
console.log(navElement);
console.log(liInNavElements);
console.log(pInLastSectionElements);
console.log(footerUlElement);

sec1.style.backgroundColor = "dodgerblue";
navElement.style.position = "absolute";
navElement.style.top = "3rem";
navElement.style.right = "3rem";

for (const key in liInNavElements) {
  if (Object.hasOwnProperty.call(liInNavElements, key)) {
    liInNavElements[key].style.fontSize = "36px";
  }
}

for (const key in pInLastSectionElements) {
  pInLastSectionElements[key].style.backgroundColor = "burlywooed";
  pInLastSectionElements[key].style.fontStyle = "italic";
}

footerUlElement.style.display = "flex";
footerUlElement.style.listStyle = "none";
