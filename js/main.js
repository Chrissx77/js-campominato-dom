const grid = document.querySelector(".grid");
const btn_play = document.getElementById("btn-play");
const bombNumber = 16;

let squareElement;
let arrayBomb;
btn_play.addEventListener("click",
function () {
    let selectDiff = parseInt(document.getElementById("selectDiff").value);
    grid.innerHTML = "";
    arrayBomb = genArrayMinMaxRand(1, lunghezza(selectDiff), bombNumber);
    console.log("Array Bombe nel range: " + lunghezza(selectDiff) + " -> " + arrayBomb);
    for (let i = 1; i <= lunghezza(selectDiff); i++) {
        console.log(lunghezza(selectDiff));
        if (lunghezza(selectDiff) === 100) {
                squareElement = createMyElement("div", "square");
            }
            else if (lunghezza(selectDiff) === 81) {
                squareElement = createMyElement("div", "squareNormal");
            }
            else if (lunghezza(selectDiff) === 49) {
                squareElement = createMyElement("div", "squareHard");
            }
            let indexSquare = i;
            squareElement.append(indexSquare);
            squareElement.addEventListener("click",
                function () {
                    this.classList.add("clicked");
                    console.log("Il valore di square è: " + indexSquare);
                    let flag = false;
                    let i = 0;
                    while (i < arrayBomb.length && flag === false) {
                        if (arrayBomb.includes(indexSquare)) {
                            flag = true;
                            alert("Sei Esploso");
                            grid.innerHTML = "";
                        }
                        i++;
                    }
                }
            )
            grid.append(squareElement);
        }
    }
);

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

function createMyElement(tagName, className) {
    const currentElement = document.createElement(tagName);
    currentElement.classList.add(className);
    return currentElement;
}

function genNumRand(min, max) {
    let numRand = Math.floor(Math.random() * (max - min) - 1) + min;
    return numRand;
}

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


