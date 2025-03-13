export function bottomLeft(pieceArrayCoord,solvedFEN,turn = true,limit) {

    let cnt = 1;
    let possibleMoves = [];

    if(solvedFEN[parseInt(pieceArrayCoord[1])-cnt] !== undefined){
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