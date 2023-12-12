const container = document.getElementById('container');

container.addEventListener('click', function () {
    this.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const colors = ['grey', 'yellow', 'brown', 'red', 'violet'];
    return colors[Math.floor(Math.random() * colors.length)];
}



