const gridContainer = document.querySelector('.grid-container');

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor = 'blue';
    });
});











