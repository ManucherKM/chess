import BoardComponent from "./components/BoardComponent";
import { useEffect, useState } from "react";
import Board from "./models/Board";
import Player from "./models/Player";
import { Colors } from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {

  const [board, setBoard] = useState(new Board);
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.white));
  const [darkPlayer, setDarkPlayer] = useState(new Player(Colors.dark));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  function restart() {
    const initialBoard = new Board;
    initialBoard.initialChunk();
    initialBoard.addFigure();
    setBoard(initialBoard);
    setCurrentPlayer(whitePlayer);
  }

  useEffect(() => {
    restart();
  }, []);

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.white ? darkPlayer : whitePlayer);
  }

  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <LostFigures
        figures={board.lostDarkFigure}
      />
      <LostFigures
        figures={board.lostWhiteFigure}
      />

      <Timer
        player={currentPlayer}
        restart={restart}
      />
    </div>
  );
}

export default App;
