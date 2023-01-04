import Board from "../models/Board";
import Chunk from "../models/Chunk";
import Figure from "../models/figures/Figure";
import Player from "../models/Player";

export interface IBoardComponent {
    board: Board,
    setBoard: (board: Board) => void,
    swapPlayer: () => void,
    currentPlayer: Player | null,
}

export interface IChunkComponent {
    chunk: Chunk,
    selected: boolean,
    onClick: (chunk: Chunk) => void,
}

export interface ILostFigures {
    figures: Figure[]
}

export interface ITimer {
    player: Player | null,
    restart: () => void,
}