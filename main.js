function drawGrid(container, columns = 16) {
    const totalSquares = Math.pow(columns, 2);
    const squarePercentage = 100/columns;

    for (let i = 0; i<(totalSquares); i++) {
        const square = document.createElement("div");
        square.style.flex =`1 1 ${squarePercentage}%`;
        container.appendChild(square);
    }
}

function paintSquare(event) {
    const STARTING_BRIGHTNESS = 100;

    if (!event.target.style.backgroundColor) {
        randomColor = Math.floor(Math.random()*16777215).toString(16);

        event.target.dataset.brightness = STARTING_BRIGHTNESS;
        event.target.style.backgroundColor = "#"+randomColor;
        event.target.style.filter = `brightness(${event.target.dataset.brightness}%)`
    } else {
        const currentBrightness = event.target.dataset.brightness;

        event.target.dataset.brightness = currentBrightness <= 10 ? 0: currentBrightness-10;
        event.target.style.filter = `brightness(${event.target.dataset.brightness}%)`
    }
}

function startGame(container, columns) {
    drawGrid(container, columns);
    container.childNodes.forEach((square) => square.addEventListener('mouseover',paintSquare));
}

function getColumns(min, max) {
    let parsedColumns;

    while (!parsedColumns || parsedColumns<min || parsedColumns>max){
        columns = prompt(`Number of squares per side? (min: ${min}; max: ${max})`);
        parsedColumns = parseInt(columns);
        console.log(parsedColumns)
    }

    return parsedColumns;
}

function resetGame(container){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    const columns = getColumns(1,100);

    startGame(container, columns);
}


const container = document.querySelector(".flex-container");

startGame(container, 16);

const shakeButton = document.querySelector(".shake-button");
shakeButton.addEventListener("click", () => {resetGame(container)}, false);





