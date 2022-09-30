const container = document.querySelector(".flex-container");

function drawGrid(container) {
    for (let i = 0; i<(16*16); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex =`1 1 ${100/16}%`;
        container.appendChild(square);
    }
}

drawGrid(container);