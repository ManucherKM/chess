import Chunk from "./Chunk"
import { Colors } from "./Colors";
import Bishop from "./figures/Bishop";
import Figure from "./figures/Figure";
import King from "./figures/King";
import Knight from "./figures/Knight";
import Pawn from "./figures/Pawn";
import Queen from "./figures/Queen";
import Rook from "./figures/Rook";

class Board {
    chunk: Chunk[][] = [];
    lostWhiteFigure: Figure[] = [];
    lostDarkFigure: Figure[] = [];

    public initialChunk() {
        for (let i = 0; i < 8; i++) {
            const line: Chunk[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    line.push(new Chunk(this, j, i, Colors.dark, null)) // Черная клетка
                } else {
                    line.push(new Chunk(this, j, i, Colors.white, null)) // Белая клетка
                }
            }
            this.chunk.push(line);
        }
    }

    public getChunk(x: number, y: number) {
        return this.chunk[y][x]
    }

    public addLostFigure(figure: Figure) {
        if (figure.color === Colors.dark) this.lostDarkFigure.push(figure);
        else this.lostWhiteFigure.push(figure);
    }

    public highlightChunk(selectedChunk: Chunk | null) {
        for (let i = 0; i < this.chunk.length; i++) {
            const line = this.chunk[i];
            for (let j = 0; j < line.length; j++) {
                const item = line[j];
                item.isActive = !!selectedChunk?.figure?.canMove(item);
            }
        }
    }

    public getCopyBoard() {
        const newBoard = new Board();
        newBoard.chunk = this.chunk;
        newBoard.lostDarkFigure = this.lostDarkFigure
        newBoard.lostWhiteFigure = this.lostWhiteFigure
        return newBoard;
    }

    private addBishop() {
        new Bishop(Colors.dark, this.getChunk(5, 0));
        new Bishop(Colors.dark, this.getChunk(2, 0));
        new Bishop(Colors.white, this.getChunk(5, 7));
        new Bishop(Colors.white, this.getChunk(2, 7));
    }

    private addKing() {
        new King(Colors.dark, this.getChunk(4, 0));
        new King(Colors.white, this.getChunk(4, 7));
    }

    private addKnight() {
        new Knight(Colors.dark, this.getChunk(6, 0));
        new Knight(Colors.dark, this.getChunk(1, 0));
        new Knight(Colors.white, this.getChunk(6, 7));
        new Knight(Colors.white, this.getChunk(1, 7));
    }

    private addPawn() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.dark, this.getChunk(i, 1));
            new Pawn(Colors.white, this.getChunk(i, 6));
        }
    }

    private addQueen() {
        new Queen(Colors.dark, this.getChunk(3, 0));
        new Queen(Colors.white, this.getChunk(3, 7));
    }

    private addRook() {
        new Rook(Colors.dark, this.getChunk(0, 0));
        new Rook(Colors.dark, this.getChunk(7, 0));
        new Rook(Colors.white, this.getChunk(0, 7));
        new Rook(Colors.white, this.getChunk(7, 7));
    }

    public addFigure() {
        this.addBishop();
        this.addKing();
        this.addKnight();
        this.addPawn();
        this.addQueen();
        this.addRook();
    }
}

export default Board