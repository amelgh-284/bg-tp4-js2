
"use strict";

// Tableau des personnes
const persons = [
    { nom: "Nom1", prenom: "Prenom1", points: 5 },
    { nom: "Nom2", prenom: "Prenom2", points: 10 },
    { nom: "Nom3", prenom: "Prenom3", points: 15 }
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

// Mettre à jour le résumé
function update_summary() {

    document.getElementById("p1").innerText =
        lignes + " ligne(s)";

    document.getElementById("p3").innerText =
        "Totale point(s)= " + total_points;
}

function consoleTableau() {
    console.log("Voici le contenu du tableau :");
    console.log(persons);
}


// Ajouter une nouvelle personne
function doNewData() {

    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value.trim();
    const prenom = elt_prenom.value.trim();
    const points = parseInt(elt_points.value);

    // Vérifier les champs
    if (nom === "" || prenom === "" ||
        elt_points.value === "" || isNaN(points)) {

        alert("Formulaire incomplet !");
        return;
    }

    doInsert(nom, prenom, points);

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

// Supprimer les lignes sélectionnées
function deleteRow() {

    // Étape 1 : vérifier si le tableau est vide
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }

    // Étape 2 : récupérer les checkbox cochées
    const table = document.getElementById("persons_table");

    const checkboxes = table.querySelectorAll(
        "td.col_chkbox input[type='checkbox']"
    );

    // Étape 3 : vérifier si une checkbox est cochée
    let selection = false;

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            selection = true;
            break;
        }
    }

    if (!selection) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Étape 4 : demander confirmation
    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
        return;
    }

    // Étape 5 : récupérer toutes les lignes
    const rows = table.querySelectorAll("tr");

    // Étape 6 : parcourir les lignes à l'envers
    for (let i = rows.length - 1; i >= 1; i--) {

        const checkbox = rows[i].querySelector(
            "td.col_chkbox input[type='checkbox']"
        );

        if (checkbox && checkbox.checked) {

            // Récupérer les points de la ligne
            const points = parseInt(rows[i].cells[3].innerText);

            // Soustraire les points du total
            total_points -= points;

            // Supprimer la personne du tableau persons
            persons.splice(i - 1, 1);

            // Supprimer la ligne HTML
            rows[i].remove();

            // Décrémenter le nombre de lignes
            lignes--;
        }
    }

    // Renuméroter les lignes restantes
    const remainingRows = table.querySelectorAll("tr");

    for (let i = 1; i < remainingRows.length; i++) {
        remainingRows[i].cells[0].innerText = i;
    }

    // Étape 7 : actualiser le résumé
    update_summary();

    alert("Suppression effectuée !");
}

// Afficher persons dans la console
function consoleTableau() {
    console.log(persons);
}

// Initialisation
init();
