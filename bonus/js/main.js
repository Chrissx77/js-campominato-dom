const grid = document.querySelector(".grid");
const btn_play = document.getElementById("btn-play");
let squareElement;
btn_play.addEventListener("click",
function () {
        let selectDiff = parseInt(document.getElementById("selectDiff").value);
        grid.innerHTML = "";
        for (let i = 1; i <= lunghezza(selectDiff); i++) {
            console.log(lunghezza(selectDiff));
            if(lunghezza(selectDiff) === 100){
                squareElement = createMyElement("div","square");
            }
            else if(lunghezza(selectDiff) === 81){
                squareElement = createMyElement("div","squareNormal");
            }
            else if(lunghezza(selectDiff) === 49){
                squareElement = createMyElement("div","squareHard");
            }

            squareElement.append(i);
            squareElement.addEventListener("click",
                function () {
                    console.log("Hai cliccato la cella numero: " + i);
                    this.classList.add("clicked");
                }
            )
            grid.append(squareElement);
        }
    }
);

function lunghezza(diff){
    let lung;
    if(diff === 0){
        lung = 100;
    } else if (diff === 1){
        lung = 81;
    }
    else if(diff === 2){
        lung = 49;
    }
    return lung;
}

function createMyElement(tagName,className) {
    const currentElement = document.createElement(tagName);
    currentElement.classList.add(className);
    return currentElement;
}


