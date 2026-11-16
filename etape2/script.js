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
