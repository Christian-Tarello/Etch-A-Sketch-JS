function drawGrid(container, columns = 16) {
    const totalSquares = Math.pow(columns, 2);
    const squarePercentage = 100/columns;

    for (let i = 0; i<(totalSquares); i++) {
        const square = document.createElement("div");
        square.style.flex =`1 1 ${squarePercentage}%`;
        square.classList.add("square")
        container.appendChild(square);
    }
}

function paintSquare(event) {
    event.target.style.backgroundColor = '#000000';
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





