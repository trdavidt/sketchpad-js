//create grid wrapper and 16x16 grid

const body = document.querySelector('body');

const gridWrapper = document.createElement('div');
gridWrapper.classList.add('grid-wrapper');

for(i = 0; i < 16; i++) {
  let gridRow = document.createElement('div');
  gridRow.classList.add('grid-row');
  gridWrapper.appendChild(gridRow);

  for(j = 0; j < 16; j++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridRow.appendChild(gridSquare);
  }
}

body.appendChild(gridWrapper);

//add mouseenter listener to each grid square 
const gridSquares = document.querySelectorAll('.grid-row .grid-square');

gridSquares.forEach(function(gridSquare) {
  gridSquare.addEventListener('mouseenter', function() {
    gridSquare.classList.add('grid-square-mouseover');
  });
});

//add clear button
const button = document.createElement('button');
button.innerHTML = 'Clear the sketchpad';
button.classList.add('clear-button');

button.addEventListener('click', function() {
  gridSquares.forEach(function(gridSquare) {
    gridSquare.classList.remove('grid-square-mouseover');
  });
})
body.appendChild(button);
