export function formatFEN(moves,FEN,startPosition,gameArea){
    if (startPosition != null && gameArea != null && (moves === null && FEN === null)) {
        return [startPosition[0]]
    }
}