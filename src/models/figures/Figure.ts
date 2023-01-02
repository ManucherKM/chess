import logo from "../../assets/black-bishop.png";
import Chunk from "../Chunk";
import { Colors } from "../Colors";

export enum FigureNames {
    Figure = "Фигура",
    King = "Король",
    Knight = "Конь",
    Pawn = "Пешка",
    Queen = "Ферзь",
    Rook = "Ладья",
    Bishop = "Слон",
}

class Figure {
    color: Colors;
    logo: typeof logo | null;
    chunk: Chunk;
    name: FigureNames;
    id: number;

    constructor(color: Colors, chunk: Chunk) {
        this.color = color;
        this.chunk = chunk;
        this.chunk.figure = this;
        this.logo = null;
        this.name = FigureNames.Figure;
        this.id = Math.random();
    }

    canMove(target: Chunk) {
        return true
    }

    moveFigure(target: Chunk) {

    }
}

export default Figure