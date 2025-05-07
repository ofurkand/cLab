export function diagonal(pieceArrayCoord,solvedFEN,turn = true,limit,tl=true,tr=true,bl=true,br=true) {
    // let pieceArrayCoord = [notasyon.indexOf(pieceCoord.split("")[0]),pieceCoord.split("")[1]-1];
    // console.log(_pieceArrayCoord);
    
    // top-right    
    let cnt = 1;
    let possibleMoves = [];

    // console.log(solvedFEN);
    // console.log(solvedFEN[_pieceArrayCoord.map(num=>(parseInt(num)+1+cnt)).toString()]);
    // do{
    //     target = solvedFEN[_pieceArrayCoord.map(num=>(parseInt(num)+1+cnt)).toString()];
    //     console.log("TAMAM");
    //     cnt++;
    // }
    // console.log(solvedFEN[_pieceArrayCoord]);
    // console.log(solvedFEN[_pieceArrayCoord.map(num=>(parseInt(num)+cnt)).toString()]);
    // while (solvedFEN[_pieceArrayCoord.map(num=>(parseInt(num)+cnt)).toString().split("")] === null 
    // && solvedFEN[_pieceArrayCoord.map(num=>(parseInt(num)+cnt)).toString().split("")] != undefined) {
    // console.log(solvedFEN);

    while(solvedFEN[parseInt(pieceArrayCoord[0])+cnt] !== undefined){
        if (solvedFEN[parseInt(pieceArrayCoord[0])+cnt][parseInt(pieceArrayCoord[1])+cnt] === null) {
            possibleMoves.push([[parseInt(pieceArrayCoord[0])+cnt],[parseInt(pieceArrayCoord[1])+cnt]]);
            // console.log(possibleMoves[possibleMoves.length-1]);
        }else{

        }


        // console.log(solvedFEN[parseInt(_pieceArrayCoord[0])+cnt][0]);
        // console.log("TAMAM");
        cnt++;
        // console.log(solvedFEN[parseInt(_pieceArrayCoord[0])+cnt]);
        // console.log([parseInt(_pieceArrayCoord[0])+cnt],[parseInt(_pieceArrayCoord[1])+cnt]);
    }
    // }
    // top-left
    cnt = 1;
    // while(solvedFEN[parseInt(pieceArrayCoord[0])+cnt] !== undefined){
    //     if (solvedFEN[parseInt(pieceArrayCoord[0])+cnt][0][parseInt(pieceArrayCoord[1])+cnt] === null) {
    //         possibleMoves.push([[parseInt(pieceArrayCoord[0])+cnt],[parseInt(pieceArrayCoord[1])+cnt]]);

    //     }
    // }



    // console.log(possibleMoves);

    possibleMoves = possibleMoves.map(move => {
        // move.join("").split("");
        move = `${notasyon[parseInt(move[0])]}${parseInt(move[1])+1}`; return move
    });
    // console.log(possibleMoves);
    return possibleMoves
}