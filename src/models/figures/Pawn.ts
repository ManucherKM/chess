import Chunk from "../Chunk";
import { Colors } from "../Colors";
import Figure, { FigureNames } from "./Figure";
import whiteFigure from "../../assets/white-pawn.png";
import blackFigure from "../../assets/black-pawn.png";

class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, chunk: Chunk) {
        super(color, chunk);
        this.logo = color === Colors.dark ? blackFigure : whiteFigure;
        this.name = FigureNames.Pawn;
    }
    public canMove(target: Chunk): boolean {
        if (!super.canMove(target)) {
            return false
        }

        const direction = this.chunk.figure?.color === Colors.dark ? 1 : -1;
        const firstStepDirection = this.chunk.figure?.color === Colors.dark ? 2 : -2;


        if ((target.y === this.chunk.y + direction || this.isFirstStep &&
            (target.y === this.chunk.y + firstStepDirection)) &&
            target.x === this.chunk.x &&
            this.chunk.board.getChunk(target.x, target.y).isEmpty()) {
            return true
        }

        if (target.y === this.chunk.y + direction &&
            (target.x === this.chunk.x + 1 || target.x === this.chunk.x - 1) &&
            this.chunk.isEnemy(target)) {
            return true
        }

        return false
    }

    moveFigure(target: Chunk): void {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}

export default Pawn