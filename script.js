// create nxn grid
function createGrid(n) {
    const oldGrid = document.querySelector('.grid');
    document.querySelector('body').removeChild(oldGrid);
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 0; i < n; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('row');
        for (let i = 0; i < n; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${420 / n}px`;
            cell.style.height = `${420 / n}px`;
            gridRow.appendChild(cell);
        }
        grid.appendChild(gridRow);
    }
    const rows = document.querySelectorAll('.row');
    document.querySelector('body').appendChild(grid);
}

createGrid(16);

// change color on enter
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseenter', function(e) {
    cell.classList.add('traveled');
}));