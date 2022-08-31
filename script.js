let btn = document.getElementById('cta-btn');
let overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
    overlay.style.display = 'grid'; // changes display from none, to grid, on button click
    overlay.classList.add('animate-overlay') //adds custom css class animate-overlay to overlay
})