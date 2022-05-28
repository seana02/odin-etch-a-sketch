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

            cell.addEventListener('mouseenter', e => {
                cell.classList.add('traveled');
            })
            gridRow.appendChild(cell);
        }
        grid.appendChild(gridRow);
    }
    const rows = document.querySelectorAll('.row');
    document.querySelector('body').appendChild(grid);
}

createGrid(16);

const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    let n = +prompt("Enter the number of squares per side");
    createGrid(n);
});