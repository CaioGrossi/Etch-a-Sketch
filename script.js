
let container = document.querySelector("#container");
let divs = document.querySelectorAll("#container div");
let typeColor;

pushDivs(16);

function makeDiv () {

    let div = document.createElement("div");
    div.style.backgroundColor = "white"
    return div;
}

function updateContainer (containerSize) {

    container.style.gridTemplateColumns = `repeat(${containerSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${containerSize}, 1fr)`;

}

function updtadeDivs () {

    divs = document.querySelectorAll("#container div")
    divEvent();
}

function pushDivs (containerSize) {

    containerSize *= containerSize;

    for (let i = 0; i < containerSize; i++) {
        div = makeDiv()
        container.appendChild(div);
    }

    updtadeDivs();
}

function removeDivs (containerSize) {

    parseInt(containerSize, 10);
    containerSize *= containerSize;
    
    for (let i = 0; i < containerSize; i++) 
        container.removeChild(divs[i])
    
}

function divEvent () {

    divs.forEach(div => div.addEventListener("mouseover", function (e) {
        paintDiv(e.target, typeColor);
    }))

}

function paintDiv (div, color) {

    if (color == "black")
        div.style.backgroundColor = "black";
    else
        div.style.backgroundColor = getRandomColor();
}

function reset () {

    divs.forEach(div => div.style.backgroundColor = "white");
}

function getRandomColor () {

    let rgb1 = Math.floor(Math.random() * 256)
    let rgb2 = Math.floor(Math.random() * 256)
    let rgb3 = Math.floor(Math.random() * 256)

    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`
}


function game () {

    let buttons = document.querySelectorAll("button");

    buttons.forEach(botao => botao.addEventListener("click", function (e) {

        if (e.target.id == "reset") {
            reset();
        }

        else if (e.target.id == "change") {

            let oldSize = document.querySelector("#size").textContent;
            removeDivs(oldSize);

            let newContainerSize = prompt("Choose the grid's area:");
            document.querySelector("#size").textContent = `${newContainerSize}`

            updateContainer(newContainerSize);
        
            pushDivs(newContainerSize)

        }

        else {
            typeColor = e.target.id;
        }
    }))

    divEvent();
    
}

game()
