export function bottomLeft(pieceArrayCoord,solvedFEN,turn = true,limit) {

    let cnt = 1;
    let possibleMoves = [];

    while(solvedFEN[parseInt(pieceArrayCoord[0])-cnt] !== undefined){
        if (solvedFEN[parseInt(pieceArrayCoord[0])-cnt][parseInt(pieceArrayCoord[1])-cnt] === null) {
            possibleMoves.push([[parseInt(pieceArrayCoord[0])-cnt],[parseInt(pieceArrayCoord[1])-cnt]]);
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