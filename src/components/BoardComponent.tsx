import { FC, useEffect, useState } from "react"
import Board from "../models/Board"
import Chunk from "../models/Chunk";
import Player from "../models/Player";
import ChunkComponent from "./ChunkComponent"

interface IBoardComponent {
    board: Board,
    setBoard: (board: Board) => void,
    swapPlayer: () => void,
    currentPlayer: Player | null,
}

const BoardComponent: FC<IBoardComponent> = ({ board, setBoard, swapPlayer, currentPlayer }) => {
    const [selected, setSelected] = useState<Chunk | null>(null);

    function clickHandler(chunk: Chunk) {
        if (selected && selected !== chunk && selected.figure?.canMove(chunk)) {
            selected.moveFigure(chunk);
            swapPlayer();
            setSelected(null);
        } else {
            if (chunk.figure?.color === currentPlayer?.color) {
                setSelected(chunk);
            }
        }
    }

    useEffect(() => {
        highlightChunk();
    }, [selected])

    function highlightChunk() {
        board.highlightChunk(selected);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard)
    }

    return (
        <div>
            <h2>
                {currentPlayer?.color}
            </h2>
            <div className="board">
                {board.chunk.map(line =>
                    line.map(chunk =>
                        <ChunkComponent
                            key={chunk.id}
                            chunk={chunk}
                            selected={chunk.x === selected?.x && chunk.y === selected.y}
                            onClick={clickHandler}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default BoardComponent