import { FC } from "react"
import { IChunkComponent } from "../types/types"

const ChunkComponent: FC<IChunkComponent> = ({ chunk, selected, onClick }) => {
    const styleSelected = selected ? "active" : "";
    const styleAttacked = chunk.isActive && chunk.figure ? "attacked" : "";
    const styleCheck = chunk.figure?.isCheck ? "check" : "";

    const styles = [chunk.color, styleSelected, styleAttacked, styleCheck].join(" ").trim();

    function clickHandler() {
        onClick(chunk);
    }

    const isElipse = chunk.isActive && !chunk.figure;
    
    return (
        <div
            onClick={clickHandler}
            className={`chunk ${styles}`}
        >
            {isElipse &&
                <div className="elipse" />
            }
            {chunk.figure?.logo &&
                <img src={chunk.figure.logo} alt="фигура" />
            }
        </div>
    )
}

export default ChunkComponent