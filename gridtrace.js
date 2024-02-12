function createContents(dimensions) {
    // Get HTML body container
    const body = document.querySelector('body');
    // Create reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    body.appendChild(resetButton);
    // Get container element
    const container = body.querySelector('#container');
    // If no dimensions were specified, set to 16 by default
    const gridSize = dimensions !== '' ? parseInt(dimensions) : 16;
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
    createContents('');
    perform();
}
main();