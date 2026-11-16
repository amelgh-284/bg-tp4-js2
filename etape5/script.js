
"use strict";

// Tableau des personnes
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

let lignes = 0;
let total_points = 0;

// Initialisation
function init() {
    for (let personne of persons) {
        doInsert(personne.nom, personne.prenom, personne.points);
    }
}

// Insérer une personne
function doInsert(nom, prenom, points) {

    lignes++;
    total_points += points;

    doInsertRowTable(lignes, nom, prenom, points);

    update_summary();
}

// Insérer une ligne HTML
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

// Mettre à jour le résumé
function update_summary() {

    document.getElementById("p1").innerText =
        lignes + " ligne(s)";

    document.getElementById("p3").innerText =
        "Totale point(s)= " + total_points;
}

// Ajouter une nouvelle personne depuis le formulaire
function doNewData() {

    // Récupérer les champs
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Récupérer les valeurs
    const nom = elt_nom.value.trim();
    const prenom = elt_prenom.value.trim();
    const points = parseInt(elt_points.value);

    // Vérifier que les champs ne sont pas vides
    if (nom === "" || prenom === "" ||
        elt_points.value === "" || isNaN(points)) {

        alert("Formulaire incomplet !");
        return;
    }

    // Insérer la personne dans le tableau HTML
    doInsert(nom, prenom, points);

    // Ajouter la personne au tableau persons
    persons.push({
        nom: nom,
        prenom: prenom,
        points: points
    });

    // Vider les champs
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
}

// Afficher le tableau persons dans la console
function consoleTableau() {
    console.log(persons);
}

// Initialisation
init();
