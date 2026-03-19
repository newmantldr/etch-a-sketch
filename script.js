const container = document.querySelector('.container');

function createGrid(gridSize) {
    container.innerHTML = '';

    for (i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);

        let cellSize = 960/gridSize;
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.addEventListener('mouseenter', changeColor)

        function changeColor(color = 'black'){
            cell.style.backgroundColor = color;
        }
    }
};

createGrid(16);

