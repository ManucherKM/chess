import { FC, useEffect, useState } from "react"
import Board from "../models/Board"
import Chunk from "../models/Chunk";
import ChunkComponent from "./ChunkComponent"

interface IBoardComponent {
    board: Board,
    setBoard: (board: Board) => void,
}

const BoardComponent: FC<IBoardComponent> = ({ board, setBoard }) => {
    const [selected, setSelected] = useState<Chunk | null>(null);

    function clickHandler(chunk: Chunk) {
        if (chunk.figure) {
            setSelected(chunk);
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
    )
}

export default BoardComponent