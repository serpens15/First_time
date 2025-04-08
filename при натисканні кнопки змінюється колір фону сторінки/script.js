const colors = ['#fff', '#ccc', '#222'];
let currentColorIndex = 0;

const colorButton = document.getElementById('changeColorButton');

colorButton.addEventListener('click', () =>{
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
})