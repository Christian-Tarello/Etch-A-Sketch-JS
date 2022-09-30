const container = document.querySelector(".flex-container");

function drawGrid(container, columns = 16) {
    const totalSquares = Math.pow(columns, 2);
    const squarePercentage = 100/columns;

    for (let i = 0; i<(totalSquares); i++) {
        const square = document.createElement("div");
        square.style.flex =`1 1 ${squarePercentage}%`;
        container.appendChild(square);
    }
}

drawGrid(container, 16);