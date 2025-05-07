export function left(pieceArrayCoord,solvedFEN,turn = true,limit) {

    let cnt = 1;
    let possibleMoves = [];

    while(solvedFEN[parseInt(pieceArrayCoord[0])-cnt] !== undefined && (limit !== undefined ? limit >= cnt : true)){
        if (solvedFEN[parseInt(pieceArrayCoord[0])-cnt][parseInt(pieceArrayCoord[1])] === null) {
            possibleMoves.push([[parseInt(pieceArrayCoord[0])-cnt],[parseInt(pieceArrayCoord[1])]]);
            // console.log(possibleMoves[possibleMoves.length-1]);
        }else{

        }

        cnt++;
    }

    possibleMoves = possibleMoves.map(move => {
        move = `${notasyon[parseInt(move[0])]}${parseInt(move[1])+1}`; return move
    });
    return possibleMoves
}

export function right(pieceArrayCoord,solvedFEN,turn = true,limit) {

    let cnt = 1;
    let possibleMoves = [];

    while(solvedFEN[parseInt(pieceArrayCoord[0])+cnt] !== undefined && (limit !== undefined ? limit >= cnt : true)){
        if (solvedFEN[parseInt(pieceArrayCoord[0])+cnt][parseInt(pieceArrayCoord[1])] === null) {
            possibleMoves.push([[parseInt(pieceArrayCoord[0])+cnt],[parseInt(pieceArrayCoord[1])]]);
            // console.log(possibleMoves[possibleMoves.length-1]);
        }else{

        }

        cnt++;
    }

    possibleMoves = possibleMoves.map(move => {
        move = `${notasyon[parseInt(move[0])]}${parseInt(move[1])+1}`; return move
    });
    return possibleMoves
}

export function upward(pieceArrayCoord,solvedFEN,turn = true,limit) {

    let cnt = 1;
    let possibleMoves = [];

    while(solvedFEN[parseInt(pieceArrayCoord[1])+cnt] !== undefined && (limit !== undefined ? limit >= cnt : true)){
        if (solvedFEN[parseInt(pieceArrayCoord[0])][parseInt(pieceArrayCoord[1])+cnt] === null) {
            possibleMoves.push([[parseInt(pieceArrayCoord[0])],[parseInt(pieceArrayCoord[1])+cnt]]);
            // console.log(possibleMoves[possibleMoves.length-1]);
        }else{

        }

        cnt++;
    }

    possibleMoves = possibleMoves.map(move => {
        move = `${notasyon[parseInt(move[0])]}${parseInt(move[1])+1}`; return move
    });
    return possibleMoves
}

export function downward(pieceArrayCoord,solvedFEN,turn = true,limit) {

    let cnt = 1;
    let possibleMoves = [];

    while(solvedFEN[parseInt(pieceArrayCoord[1])-cnt] !== undefined && (limit !== undefined ? limit >= cnt : true)){
        if (solvedFEN[parseInt(pieceArrayCoord[0])][parseInt(pieceArrayCoord[1])-cnt] === null) {
            possibleMoves.push([[parseInt(pieceArrayCoord[0])],[parseInt(pieceArrayCoord[1])-cnt]]);
            // console.log(possibleMoves[possibleMoves.length-1]);
        }else{

        }

        cnt++;
    }

    possibleMoves = possibleMoves.map(move => {
        move = `${notasyon[parseInt(move[0])]}${parseInt(move[1])+1}`; return move
    });
    return possibleMoves
}