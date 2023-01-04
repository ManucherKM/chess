import Chunk from "../Chunk";
import { Colors } from "../Colors";
import Figure, { FigureNames } from "./Figure";
import whiteFigure from "../../assets/white-queen.png";
import blackFigure from "../../assets/black-queen.png";

class Queen extends Figure {

    constructor(color: Colors, chunk: Chunk) {
        super(color, chunk);
        this.logo = color === Colors.dark ? blackFigure : whiteFigure;
        this.name = FigureNames.Queen;
    }
    public canMove(target: Chunk): boolean {
        if (!super.canMove(target)) return false
        if (this.chunk.isEmptyVertical(target)) return true
        if (this.chunk.isEmptyHorizontal(target)) return true
        if (this.chunk.isEmptyDiagonal(target)) return true
        return false
    }
}

export default Queen