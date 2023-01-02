import { FC } from "react"
import Chunk from "../models/Chunk"

interface IChunkComponent {
    chunk: Chunk,
    selected: boolean,
    onClick: (chunk: Chunk) => void,
}

const ChunkComponent: FC<IChunkComponent> = ({ chunk, selected, onClick }) => {

    function clickHandler() {
        onClick(chunk)
    }

    return (
        <div
            onClick={clickHandler}
            className={["chunk", chunk.color, selected ? "active" : "", chunk.isActive && chunk.figure ? "attacked" : ""].join(" ").trim()}
        >
            {chunk.isActive && !chunk.figure &&
                <div className="elipse" />
            }
            {chunk.figure?.logo &&
                <img src={chunk.figure.logo} alt="фигура" />
            }
        </div>
    )
}

export default ChunkComponent