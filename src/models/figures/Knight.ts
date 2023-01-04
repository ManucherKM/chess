import Chunk from "../Chunk";
import { Colors } from "../Colors";
import Figure, { FigureNames } from "./Figure";
import whiteFigure from "../../assets/white-knight.png";
import blackFigure from "../../assets/black-knight.png";

class Knight extends Figure {

    constructor(color: Colors, chunk: Chunk) {
        super(color, chunk);
        this.logo = color === Colors.dark ? blackFigure : whiteFigure;
        this.name = FigureNames.Knight;
    }
    public canMove(target: Chunk): boolean {
        if (!super.canMove(target)) return false
        const dx = Math.abs(this.chunk.x - target.x);
        const dy = Math.abs(this.chunk.y - target.y);

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}

export default Knight