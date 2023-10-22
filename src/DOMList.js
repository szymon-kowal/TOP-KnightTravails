import shortestPathKnight from './modules/game';
import generateBoard from './modules/generateBoard';

;

const getCells = () => document.querySelectorAll('.cell');
const getKnightButton = () => document.querySelector('.placeKnight');
const endSquareButton = () => document.querySelector('.endSquare');
const resetBoardButton = () => document.querySelector('.resetBoard');
const travailButton = () => document.querySelector('.travail');
let lastClicked = '';

function placeKnight() {
    lastClicked = 'placeK';
    getCells().forEach(cell => {
        cell.addEventListener('click', () => {
            if (lastClicked === 'placeK') {
                getCells().forEach(cellRemove => {
                    cellRemove.classList.remove('knight');
                    cell.classList.add('knight');
                });
            }
        });
    });
};

function placeEnd() {
    lastClicked = 'placeE';
    getCells().forEach(cell => {
        cell.addEventListener('click', () => {
            if (lastClicked === 'placeE') {
                getCells().forEach(cellRemove => {
                    cellRemove.classList.remove('end');
                    cell.classList.add('end');
                });
            }
        });   
    });
};


function clearBoardClick() {
    lastClicked = 'placeK';
    getCells().forEach(cell => {
        cell.classList.remove('end');
        cell.classList.remove('knight');
        cell.textContent = '';
    });
}

function getStartEnd() {
    let startIndex = 0;
    let endIndex = 0;
    let count = -1;
    getCells().forEach(cell => {
        count++;
        if (cell.classList.contains('knight')) {
            startIndex = count;
        } else if (cell.classList.contains('end')) {
            endIndex = count;
        }
    });
    const returnStart = [Math.floor(startIndex / 8), startIndex % 8];
    const returnEnd = [Math.floor(endIndex / 8), endIndex % 8];
    console.log(returnStart, returnEnd);
    return [returnStart, returnEnd];
}

function displayPath(path) {
    let num = 0;
    for (let i = 0; i < path.length; i++) {
        num = path[i][0] * 8 + path[i][1];
        // eslint-disable-next-line no-param-reassign
        path[i] = num;
    }

    let count = -1;
    getCells().forEach(cell => {
        count++;
        for (let i = 0; i < path.length; i++) {
            if (count === path[i]) {
                // eslint-disable-next-line no-param-reassign
                cell.textContent = `${i}`;
            }
        }
    });
}

function handleTravail() {
    const [start, end] = getStartEnd();
    const shortestPath = shortestPathKnight(start, end);
    console.log('Shortest Path:', shortestPath);
    displayPath(shortestPath);
}

const eventListeners = {
    knightListener() {
        return getKnightButton().addEventListener('click', placeKnight);
    },
    endListener() {
        return endSquareButton().addEventListener('click', placeEnd);
    },
    clearBoard() {
        return resetBoardButton().addEventListener('click', clearBoardClick);
    },
    travail() {
        return travailButton().addEventListener('click', handleTravail);
    },
    boardLoad() {
        return document.addEventListener('DOMContentLoaded', generateBoard);
    },
    applyListeners() {
        this.boardLoad();
        this.knightListener();
        this.endListener();
        this.clearBoard();
        this.travail();
    }
};

export default eventListeners;