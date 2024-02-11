const GRIDSIZE = 500; 
let squaresPerSide = 16;
let resolution = squaresPerSide * squaresPerSide;

const submitButton = document.querySelector('#submit-btn');
const clearButton = document.querySelector('#clear-btn');


// What are the backticks?
const sketchbox = document.querySelector('#sketchbox');
sketchbox.style.width = sketchbox.style.height = `${GRIDSIZE}px`;

// What is 'this'?
function setPenColor() {
    this.style.backgroundColor = 'violet';
}

function generateGrid() {
    for (let i = 0; i < (resolution); i++) {
        const cell = document.createElement('div');

        cell.style.width = cell.style.height = `${(GRIDSIZE / squaresPerSide) - 2}px`;
        cell.classList.add('cell');

        sketchbox.appendChild(cell);

        cell.addEventListener('mouseover', setPenColor);
    }
}

function removeCells() {
    while (sketchbox.firstChild) {
        sketchbox.removeChild(sketchbox.firstChild);
    }
}

generateGrid();

submitButton.addEventListener('click', function() {
    squaresPerSide = parseInt(document.querySelector('#squares-per-side').value);
    resolution = squaresPerSide * squaresPerSide;
    console.log('Button has been clicked');
    removeCells();
    generateGrid();
})

clearButton.addEventListener('click', function() {
    removeCells();
    generateGrid();
});