document.addEventListener('DOMContentLoaded', () => {
    const gridBackground = document.querySelector('.grid-background');

    
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridBackground.appendChild(cell);
    }
});