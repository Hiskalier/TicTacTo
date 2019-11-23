let signe_player1;
let signe_player2;

texte = document.querySelector("#textejs");

gameArea = document.querySelector("#tableau-jeux");

let joueurEnCour = 2;
let tableauVerif = [];

gameArea.addEventListener("click", function(e) {


        if(joueurEnCour === 1) {
        
            if (e.target.id === "tableau-jeux") {
                alert("Vous avez sélectionné plusieurs case!");
            } else {
                quelleCase = e.target.id;
                viewForme(e, "rond", joueurEnCour);
                changerDeJoueur(joueurEnCour);
                tableauVerif[quelleCase] = "rond";
                verifFin();
            }

        } else if (joueurEnCour === 2) {

            if (e.target.id === "tableau-jeux") {

                alert("Vous avez sélectionné plusieurs case!");

            } else {
                quelleCase = e.target.id;
                viewForme(e, "croix", joueurEnCour);
                changerDeJoueur(joueurEnCour);
                tableauVerif[quelleCase] = "croix";
                verifFin();
            }

        } else {

            prompt("Erreur système!");

        }
})




function viewForme(event, forme, joueur) {
    event.target.innerHTML = '<img class="case-image" src="img/' + forme + '.png">';
    texte.innerHTML = "Joueur " + joueur + " doit jouer!";   
}

function changerDeJoueur(joueur) {
    if (joueur === 1 ) {
        joueurEnCour = 2;
    } else {
        joueurEnCour = 1;
    }
}

function boutonGameFinish(status) {
    boutonFinishHTML = document.querySelector("#boutondefin");
    phraseDeFin = document.querySelector(".phrasedefin");
    phraseDeFin.innerHTML = status;
    boutonFinishHTML.style.visibility = "visible";
}

function verifFin() {

    if (tableauVerif["0,0"] === "rond" && tableauVerif["1,1"] === "rond" && tableauVerif["2,2"] === "rond" ||
        tableauVerif["0,0"] === "rond" && tableauVerif["1,0"] === "rond" && tableauVerif["2,0"] === "rond" ||
        tableauVerif["0,0"] === "rond" && tableauVerif["1,1"] === "rond" && tableauVerif["2,2"] === "rond" ||
        tableauVerif["0,1"] === "rond" && tableauVerif["1,1"] === "rond" && tableauVerif["2,1"] === "rond" ||
        tableauVerif["0,2"] === "rond" && tableauVerif["1,2"] === "rond" && tableauVerif["2,2"] === "rond" ||
        tableauVerif["0,0"] === "rond" && tableauVerif["0,1"] === "rond" && tableauVerif["0,2"] === "rond" ||
        tableauVerif["1,0"] === "rond" && tableauVerif["1,1"] === "rond" && tableauVerif["1,2"] === "rond" ||
        tableauVerif["2,0"] === "rond" && tableauVerif["2,1"] === "rond" && tableauVerif["2,2"] === "rond" ||
        tableauVerif["0,2"] === "rond" && tableauVerif["1,1"] === "rond" && tableauVerif["2,0"] === "rond") {

            boutonGameFinish("Joueur 2 gagne!");

        } else if (tableauVerif["0,0"] === "rond" && tableauVerif["1,1"] === "rond" && tableauVerif["2,2"] == "croix" ||
        tableauVerif["0,0"] === "croix" && tableauVerif["1,0"] === "croix" && tableauVerif["2,0"] === "croix" ||
        tableauVerif["0,0"] === "croix" && tableauVerif["1,1"] === "croix" && tableauVerif["2,2"] === "croix" ||
        tableauVerif["0,1"] === "croix" && tableauVerif["1,1"] === "croix" && tableauVerif["2,1"] === "croix" ||
        tableauVerif["0,2"] === "croix" && tableauVerif["1,2"] === "croix" && tableauVerif["2,2"] === "croix" ||
        tableauVerif["0,0"] === "croix" && tableauVerif["0,1"] === "croix" && tableauVerif["0,2"] === "croix" ||
        tableauVerif["1,0"] === "croix" && tableauVerif["1,1"] === "croix" && tableauVerif["1,2"] === "croix" ||
        tableauVerif["2,0"] === "croix" && tableauVerif["2,1"] === "croix" && tableauVerif["2,2"] === "croix" ||
        tableauVerif["0,2"] === "croix" && tableauVerif["1,1"] === "croix" && tableauVerif["2,0"] === "croix") {
            boutonGameFinish("Joueur 1 gagne!");
        } else if (typeof tableauVerif["0,0"] ===  "string" && typeof tableauVerif["0,1"] === "string" && typeof tableauVerif["0,2"] === "string" && typeof tableauVerif["1,0"] === "string" && typeof tableauVerif["1,1"] === "string" && typeof tableauVerif["1,2"] === "string" && typeof tableauVerif["2,0"] === "string" && typeof tableauVerif["2,1"] === "string" && typeof tableauVerif["2,2"] === "string") {
            boutonGameFinish("Egalité");
        }
}
