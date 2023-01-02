import Board from "./Board";
import { Colors } from "./Colors";
import Figure from "./figures/Figure";

class Chunk {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    board: Board;
    figure: Figure | null;
    isActive: boolean;
    id: number;


    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
        this.figure = figure;
        this.isActive = false;
        this.id = Math.random();
    }

}

export default Chunk