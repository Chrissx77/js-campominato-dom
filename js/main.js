// Riferimento alla griglia
const grid = document.querySelector(".grid");
// Riferimento al bottone
const btn_play = document.getElementById("btn-play");
// Numero bombe in gioco
const bombNumber = 16;

// Inizializzo variabili utili nella funzione
let squareElement;
let arrayBomb;
let score = 0;
let gameover = false;

//Bottone sta in ascolto
btn_play.addEventListener("click",
    function () {
        // reset game-over così da poter riprovare a giocare
        gameover = false;
        // variabile che contiene la difficoltà scelta
        let selectDiff = parseInt(document.getElementById("selectDiff").value);
        grid.innerHTML = "";
        // array che contiene la posizione delle bombe
        arrayBomb = genArrayMinMaxRand(1, lunghezza(selectDiff), bombNumber);
        console.log("Array Bombe nel range: " + lunghezza(selectDiff) + " -> " + arrayBomb);
        // 
        for (let i = 1; i <= lunghezza(selectDiff); i++) {
            // condizioni per controllare la difficoltà scelta e quindi disporre le celle in modo corretto
            if (lunghezza(selectDiff) === 100) {
                squareElement = createMyElement("div", "square");
            }
            else if (lunghezza(selectDiff) === 81) {
                squareElement = createMyElement("div", "squareNormal");
            }
            else if (lunghezza(selectDiff) === 49) {
                squareElement = createMyElement("div", "squareHard");
            }
            // variabile con numero dentro il valore della cella in squareElement
            let indexSquare = i;
            squareElement.append(indexSquare);
            squareElement.addEventListener("click",
                function () {
                    // Blocco il gioco nel caso in cui ho perso
                    if (gameover) {
                        return;
                    }
                    this.classList.add("clicked");
                    console.log("Il valore di square è: " + indexSquare);
                    // variabile che contiene il numero necessario per vincer
                    let count = (lunghezza(selectDiff) - bombNumber);
                    console.log("count : " + count);
                    // condizione che controlla se hai vinto
                    if (score >= count - 1) {
                        const win = document.querySelector(".win");
                        win.innerHTML = "HAI VINTO! Hai totalizzato: " + score;
                    }
                    let i = 0;
                    let flag = false;
                    console.log("Numero di click senza esplodere: " + score);
                    // ciclo l'array per vedere se abbiamo preso la bomba
                    while (i < arrayBomb.length && flag === false) {
                        // controllo se ho preso la bomba all'istante arrayBomb[i];
                        if (arrayBomb.includes(indexSquare)) {
                            flag = true;
                            this.classList.add("gameover");
                            const win = document.querySelector(".win");
                            win.innerHTML = "HAI PERSO! Hai totalizzato: " + score;
                            btn_play.innerHTML = "Riprova";
                            score = 0;
                            gameover = true;
                        }
                        i++;
                    }
                    score++;
                }
            )
            //appendo tutto
            grid.append(squareElement);
        }
    }
);


// funzione che ritorna la lunghezza in base al livello scelto
function lunghezza(diff) {
    let lung;
    if (diff === 0) {
        lung = 100;
    } else if (diff === 1) {
        lung = 81;
    }
    else if (diff === 2) {
        lung = 49;
    }
    return lung;
}


// funzione per creare un elemento
function createMyElement(tagName, className) {
    const currentElement = document.createElement(tagName);
    currentElement.classList.add(className);
    return currentElement;
}

// funzione per la creazione di numeri random
function genNumRand(min, max) {
    let numRand = Math.floor(Math.random() * max - min + 1) + min;
    return numRand;
}

// funzione per creare un array con numeri random compresi tra minNum e maxNum
function genArrayMinMaxRand(minNum, maxNum, lengthArr) {
    let array = [];
    let i = 0;
    while (array.length < lengthArr) {
        let numRand = genNumRand(minNum, maxNum);
        if (!array.includes(numRand)) {
            array.push(numRand)
        }
        i++;
    }
    return array;
}


