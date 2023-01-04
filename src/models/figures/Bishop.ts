import Chunk from "../Chunk";
import { Colors } from "../Colors";
import Figure, { FigureNames } from "./Figure";
import whiteFigure from "../../assets/white-bishop.png";
import blackFigure from "../../assets/black-bishop.png";

class Bishop extends Figure {

    constructor(color: Colors, chunk: Chunk) {
        super(color, chunk);
        this.logo = color === Colors.dark ? blackFigure : whiteFigure;
        this.name = FigureNames.Bishop;
    }

    public canMove(target: Chunk): boolean {
        if (!super.canMove(target)) return false
        if (this.chunk.isEmptyDiagonal(target)) return true
        return false
    }
}

export default Bishop