function createContents() {
    // Prompt user to specify dimensions, or grid size
    const dimensions = prompt('Enter a size for your grid');
    // Get HTML body container
    const body = document.querySelector('body');
    // Get container element
    const container = body.querySelector('#container');
    // Create reset button
    const resetButton = document.createElement('button');
    // Set text to button
    resetButton.textContent = 'Reset';
    // Insertion of the button prior to container
    body.insertBefore(resetButton, container);
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
    return gridSize;
}

function perform(dimensions){
    // Reselect the container based on its id
    const content = document.querySelector('#container');
    console.log(content);
    // Select all rows in container
    const rows = content.querySelectorAll('.row');
    const rowLength = rows.length;
    console.log(rows.length);
    console.log(dimensions + ' ' + rowLength)
    // Validate number of rows
    if (rowLength !== dimensions) {
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

function deleteContents(){
    const body = document.querySelector('body');
    const button = document.querySelector('button');
    body.removeChild(button);
    const container = document.querySelector('#container');
    container.innerHTML = '';
    console.log(container);
}

function resetGrid(){
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        deleteContents();
        main();
    });
}

function main(){
    const gridDimensions = createContents();
    console.log(gridDimensions);
    perform(gridDimensions);
    resetGrid();
}
main();