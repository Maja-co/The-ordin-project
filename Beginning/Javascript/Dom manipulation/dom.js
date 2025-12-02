// TRIN 1: Skab elementet
// Vi fortæller JavaScript, at vi vil lave en 'p' tag.
const mitAfsnit = document.createElement("p"); 

// TRIN 2: Giv elementet indhold og styling
// Nu har vi variablen 'mitAfsnit', som vi kan ændre på.
mitAfsnit.textContent = "Hey I’m red!";
mitAfsnit.style.color = "red";

// TRIN 3: Sæt elementet ind på siden
// Vi tager fat i 'body' og tilføjer (append) vores afsnit som et barn (child).
document.body.appendChild(mitAfsnit);

//Trin 1
const blueh3 = document.createElement("h3");
// Trin 2
blueh3.textContent = "I’m a blue h3!";
blueh3.style.color = "blue";
//Trin 3
document.body.appendChild(blueh3);

// Trin 1
const container = document.createElement("div");
const h1 = document.createElement("h1")
const paragraf = document.createElement("p")
// Trin 2
h1.textContent = "I’m in a div"
paragraf.textContent = "ME TOO!"

container.style.border = "5px solid black";
container.style.backgroundColor = "pink";

// Trin 3
// Vi "limer" h1 og p fast på containeren, IKKE på body
container.appendChild(h1);
container.appendChild(paragraf);

// Til sidst sætter vi hele containeren (med indhold) ind på siden
document.body.appendChild(container);
