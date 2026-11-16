"use strict";

// Fonction qui permet d'insérer une nouvelle ligne
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer le tableau (cours : slide 61-64)
    const table = document.getElementById("persons_table");

    // Créer une nouvelle ligne
    const row = document.createElement("tr");

    // Créer les cellules
    const col_num = document.createElement("td");
    const col_nom = document.createElement("td");
    const col_prenom = document.createElement("td");
    const col_points = document.createElement("td");
    const col_select = document.createElement("td");

    // Remplir les cellules
    col_num.innerText = num;
    col_nom.innerText = nom;
    col_prenom.innerText = prenom;
    col_points.innerText = points;

    // Affecter les classes CSS
    col_num.setAttribute("class", "col_number");
    col_nom.setAttribute("class", "col_text");
    col_prenom.setAttribute("class", "col_text");
    col_points.setAttribute("class", "col_text");
    col_select.setAttribute("class", "col_chkbox");

    // Créer une checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    col_select.appendChild(checkbox);

    // Ajouter les cellules à la ligne
    row.appendChild(col_num);
    row.appendChild(col_nom);
    row.appendChild(col_prenom);
    row.appendChild(col_points);
    row.appendChild(col_select);

    // Ajouter la ligne au tableau
    table.appendChild(row);
}
"use strict";

// Tableau des personnes
const persons = [
    { nom: "Nom1", prenom: "Prenom1", points: 5 },
    { nom: "Nom2", prenom: "Prenom2", points: 5 },
    { nom: "Nom3", prenom: "Prenom3", points: 5 }
];

// Compteur de lignes
let lignes = 0;

// Initialiser le tableau HTML
function init() {
    for (let personne of persons) {
        doInsert(personne.nom, personne.prenom, personne.points);
    }
}

// Insérer une personne
function doInsert(nom, prenom, points) {
    lignes++;
    doInsertRowTable(lignes, nom, prenom, points);
}

// Insérer une ligne dans le tableau HTML
function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementById("persons_table");

    const row = document.createElement("tr");

    const col_num = document.createElement("td");
    const col_nom = document.createElement("td");
    const col_prenom = document.createElement("td");
    const col_points = document.createElement("td");
    const col_select = document.createElement("td");

    col_num.innerText = num;
    col_nom.innerText = nom;
    col_prenom.innerText = prenom;
    col_points.innerText = points;

    col_num.className = "col_number";
    col_nom.className = "col_text";
    col_prenom.className = "col_text";
    col_points.className = "col_text";
    col_select.className = "col_chkbox";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    col_select.appendChild(checkbox);

    row.appendChild(col_num);
    row.appendChild(col_nom);
    row.appendChild(col_prenom);
    row.appendChild(col_points);
    row.appendChild(col_select);

    table.appendChild(row);
}

// Afficher le tableau persons dans la console
function consoleTableau() {
    console.log(persons);
}

// Exécuter init au chargement
init();