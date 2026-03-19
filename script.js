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

