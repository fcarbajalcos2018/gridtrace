function createGrid() {
    // Get container element
    const container = document.querySelector('#container');
    const gridSize = 16;
    // Remove placeholder text
    container.innerHTML = '';
    // Primary loop for creation of row containers
    for (let i = 0; i < gridSize; i++){
        // Create a row container
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        // Secondary loop for creation of grid elements
        for (let j = 0; j < gridSize; j++) {
            // Create a column, or the grid element itself for each row
            const column = document.createElement('div');
            column.classList.add('column');
            column.setAttribute('id', `${i}_${j}`);
            column.textContent = `(${i}, ${j}) `;
            row.appendChild(column);
        }
    }
    console.log(container);
}

function perform(){
    const content = document.querySelector('#container');
    console.log(content);
}

function main(){
    createGrid();
    perform();
}
main();