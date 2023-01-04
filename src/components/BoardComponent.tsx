import { FC, useEffect, useState } from "react"
import { IBoardComponent } from "../types/types";
import Chunk from "../models/Chunk";
import ChunkComponent from "./ChunkComponent";

const BoardComponent: FC<IBoardComponent> = ({ board, setBoard, swapPlayer, currentPlayer }) => {
    const [selected, setSelected] = useState<Chunk | null>(null);

    function clickHandler(chunk: Chunk) {
        const isSelectAndMove = selected && selected !== chunk && selected.figure?.canMove(chunk);

        if (isSelectAndMove) {
            selected.moveFigure(chunk);
            swapPlayer();
            setSelected(null);
        } else {
            const isSameColors = chunk.figure?.color === currentPlayer?.color;

            if (isSameColors) {
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