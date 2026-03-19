const container = document.querySelector('.container');

function createGrid(gridSize) {
    container.innerHTML = '';

    for (i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        

        let cellSize = 960/gridSize;
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = '#333';

        });
        container.appendChild(cell);
    };
    
};

createGrid(16);

const gridSizeButton = document.querySelector('#gridSize');
gridSizeButton.addEventListener('click', () =>{
    gridSize = prompt('What size should the grid be?', 16);
    if (1<= gridSize <= 100) {
        createGrid(gridSize);
        cell.style.backgroundColor('#f0f0f0');
    } else {
        alert('Please enter in a number between 1-100!');
        return;
    }
});