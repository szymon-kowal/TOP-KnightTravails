/* eslint-disable no-unused-expressions */
const generateBoard = () => {
    const boardContainer = document.querySelector('.gameboard');
    for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (i % 2 === 0) {
                j % 2 === 0 ? cell.classList.add('white') : cell.classList.add('black');
            }
            else {
                j % 2 === 0 ? cell.classList.add('black') : cell.classList.add('white');
            }     
            boardContainer.appendChild(cell);
        }
    }
};

export default generateBoard;