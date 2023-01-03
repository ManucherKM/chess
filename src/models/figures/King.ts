import Chunk from "../Chunk";
import { Colors } from "../Colors";
import Figure, { FigureNames } from "./Figure";
import whiteFigure from "../../assets/white-king.png";
import blackFigure from "../../assets/black-king.png";

class King extends Figure {
    constructor(color: Colors, chunk: Chunk) {
        super(color, chunk);
        this.logo = color === Colors.dark ? blackFigure : whiteFigure;
        this.name = FigureNames.King;
    }
    public canMove(target: Chunk): boolean {
        if (!super.canMove(target)) {
            return false
        }

        const absX = Math.abs(target.x - this.chunk.x);
        const absY = Math.abs(target.y - this.chunk.y);

        if (absX > 1 || absY > 1) {
            return false
        }

        return true
    }
}

export default King