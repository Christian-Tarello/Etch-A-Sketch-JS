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


const container = document.querySelector(".flex-container");
drawGrid(container, 16);
container.childNodes.forEach((square) => square.addEventListener('mouseover',paintSquare));