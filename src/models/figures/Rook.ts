import Chunk from "../Chunk";
import { Colors } from "../Colors";
import Figure, { FigureNames } from "./Figure";
import whiteFigure from "../../assets/white-rook.png";
import blackFigure from "../../assets/black-rook.png";

class Rook extends Figure {

    constructor(color: Colors, chunk: Chunk) {
        super(color, chunk);
        this.logo = color === Colors.dark ? blackFigure : whiteFigure;
        this.name = FigureNames.Rook;
    }
    public canMove(target: Chunk): boolean {
        if (!super.canMove(target)) return false
        if (this.chunk.isEmptyVertical(target)) return true
        if (this.chunk.isEmptyHorizontal(target)) return true
        return false
    }
}

export default Rook