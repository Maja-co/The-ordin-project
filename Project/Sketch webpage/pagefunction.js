let row = 16;


function gridSize() {
    const gridChoice = document.querySelector("#grid-size");
    gridChoice.addEventListener("click", () => {
        let rowSvar = prompt("Chose how many rows");
        if(rowSvar < 100){
        row = rowSvar;
        createGrid();
        }
    })
}

gridSize();


function createGrid(){
    const gridDiv = document.querySelector("#gridcontainer");
    gridDiv.innerHTML = "";
    for (let i = 0; i < row; i++) {
        const gridColumn = document.createElement("div")   
        for (let f = 0; f < row; f++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            gridColumn.appendChild(square);;
        }
        gridDiv.appendChild(gridColumn);
    }
}

