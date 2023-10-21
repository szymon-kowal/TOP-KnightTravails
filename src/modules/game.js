function isValidMove(x, y) {
    return x >= 0 && y >= 0 && x < 8 && y < 8;
}

function getKnightMoves(x, y) {
    const validMoves = [];
    const moves = [
        [-1, -2], [-2, -1], [-2, 1], [-1, 2],
        [1, -2], [2, -1], [2, 1], [1, 2]
    ];
    
    // eslint-disable-next-line no-restricted-syntax
    for (const move of moves) {
        const newX = x + move[0];
        const newY = y + move[1];
        if (isValidMove(newX, newY)) {
            validMoves.push([newX, newY]);
        }
    }

    return validMoves;
}

function shortestPathKnight(start, end) {
    const queue = [{ x: start[0], y: start[1], steps: 0, path: [start] }];

    const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const { x, y, steps, path } = queue.shift();

        if (x === end[0] && y === end[1]) {
            return path;
        }

        const knightMoves = getKnightMoves(x, y);
        // eslint-disable-next-line no-restricted-syntax
        for (const [newX, newY] of knightMoves) {
            if (!visited[newX][newY]) {
                const newPath = [...path, [newX, newY]];
                queue.push({ x: newX, y: newY, steps: steps + 1, path: newPath });
                visited[newX][newY] = true;
            }
        }
    }

    return null;
}

export default shortestPathKnight;