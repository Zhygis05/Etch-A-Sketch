let selectedColor = "";

function enterSize() {
  const selectSize = document.querySelector('.select-size');
  selectSize.style.cursor = 'pointer';

  selectSize.addEventListener('click', () => {
    let size;
    do {
      size = prompt('Enter the size of the grid. The range is 32-100');
    } while (!(size <= 100 && size >= 32));

    gridSize(size);

    selectSize.style.transform = 'initial';
    selectSize.disabled = true;
    selectSize.style.color = 'grey';
    selectSize.style.border = '2px solid grey';
    selectSize.style.cursor = 'initial';
  });

  selectSize.addEventListener('mouseover', () => {
    selectSize.style.transform = 'scale(1.5)';
  });

  selectSize.addEventListener('mouseout', () => {
    if (!selectSize.disabled) {
      selectSize.style.transform = 'initial';
    }
  });
}


function gridSize(size) {
    const grids = document.querySelector('.board');
    grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grids.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    const divNum = size * size;
  
    for (let i = 0; i < divNum; i++) {
      let divs = document.createElement('div');
      divs.style.border = '1px solid #dee1e4';
      grids.appendChild(divs);
    }
  
    addHoverEffect(selectedColor);
  }

  

  function colorPicker() {
    const gridColor = document.querySelector('.select-color');
    gridColor.style.cursor = 'pointer';
  
    gridColor.addEventListener('mouseover', () => {
      gridColor.style.transform = 'scale(1.5)';
    });
  
    gridColor.addEventListener('mouseout', () => {
      gridColor.style.transform = 'initial';
    });
  
    gridColor.addEventListener('click', () => {
      let red, green, blue;
  
      do {
        red = parseInt(prompt('Enter the red value (0-255):'));
      } while (!(red >= 0 && red <= 255) || isNaN(red));
  
      do {
        green = parseInt(prompt('Enter the green value (0-255):'));
      } while (!(green >= 0 && green <= 255) || isNaN(green));
  
      do {
        blue = parseInt(prompt('Enter the blue value (0-255):'));
      } while (!(blue >= 0 && blue <= 255) || isNaN(blue));
  
      selectedColor = `rgb(${red}, ${green}, ${blue})`;
      gridColor.disabled = true;
      gridColor.style.transform = 'initial';
      gridColor.style.color = 'grey';
      gridColor.style.border = '2px solid grey';
      gridColor.style.cursor = 'initial';
  
      addHoverEffect(selectedColor); 
    });
  }



function reloadBoard () {
    const eraseTheBoard = document.querySelector(`.select-erase`);
    eraseTheBoard.style.cursor = `pointer`;
    eraseTheBoard.addEventListener(`mouseover`, () => {
        eraseTheBoard.style.transform = `scale(1.5)`;
    })
    eraseTheBoard.addEventListener(`mouseout`, () => {
        eraseTheBoard.style.transform = `initial`;
    })
    eraseTheBoard.addEventListener(`click`, () => {
        location.reload();
    })
}

function addHoverEffect(selectedColor) {
    const gridCells = document.querySelectorAll('.board div');
    gridCells.forEach((cell) => {
      cell.style.cursor = 'pointer';
      cell.addEventListener('mouseover', function () {
        this.style.backgroundColor = selectedColor;
      });
    });
  }
  
colorPicker();
enterSize();
reloadBoard();
