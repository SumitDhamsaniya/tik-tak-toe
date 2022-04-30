import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../Helper";

const Game = () => {

    const styles = {
        width: '200px',
        margin: '20px auto'
    };
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'x' : '0';
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }
    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button onClick={()=>setBoard(Array(9).fill(null))}>
            start game
        </button>

    }
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>
                    {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
                    {renderMoves()}
                </p>
            </div>
        </>
    )
}
export default Game