
function enterSize() {
    const selectSize = document.querySelector('.select-size');
    selectSize.style.cursor = 'pointer';
    selectSize.addEventListener('click', () => {
        let size;
        do {
            size = prompt('Enter the size of the grid. The range is 32-100');
        } while (size > 100 || size < 32);
        gridSize(size);
    });
    hoverEff(selectSize);
}

function gridSize(size) {
    const grids = document.querySelector('.board');
    grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grids.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const divNum = size * size;

    for (let i = 0; divNum > i; i++) {
        let divs = document.createElement(`div`);
        divs.style.border = `1px solid #dee1e4`;
        grids.insertAdjacentElement(`beforeend`, divs);

    }
}

function hoverEff(selectSize) {
    selectSize.addEventListener('mouseover', () => {
        selectSize.style.transform = 'scale(1.5)';
    });

    selectSize.addEventListener('mouseout', () => {
        selectSize.style.transform = 'initial';
    });
}

enterSize();



