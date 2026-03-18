const container = document.querySelector('.container');

function createGrid(width, height) {
    const container = document.querySelector('.container');

    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++){
            const row = document.createElement('div');
            container.appendChild(row);
        }
    }
};

createGrid(16, 16);
