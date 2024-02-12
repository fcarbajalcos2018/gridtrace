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
            //column.textContent = `(${i}, ${j}) `;
            row.appendChild(column);
        }
    }
    console.log(container);
}

function perform(){
    // Reselect the container based on its id
    const content = document.querySelector('#container');
    console.log(content);
    // Select all rows in container
    const rows = content.querySelectorAll('.row')
    const rowLength = rows.length;
    // Validate number of rows
    if (rowLength !== 16) {
        return;
    }
    // Loop through the rows
    for (let i = 0; i < rowLength; i++){
        const row = rows[i];
        // Select columns in row
        const columns = row.querySelectorAll('.column');
        const columnLength = columns.length;
        // Validate number of columns assuming number of rows is same as that of column
        if (columnLength !== rowLength){
            return
        }
        // Loop through the columns
        for (let j = 0; j < columnLength; j++){
            const gridElement = columns[j];
            gridElement.addEventListener('mouseover', () => {
                console.log(`${i},${j}`);
                gridElement.classList.replace('column', 'column_hover');
            })
        }
    }
}

function main(){
    createGrid();
    perform();
}
main();