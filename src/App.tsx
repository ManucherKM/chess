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
      <div className="wrapper_timer">
        <Timer
          player={currentPlayer}
          restart={restart}
        />
      </div>
      <div className="wrapper_board">
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
      </div>
      <div className="wrapper_lostfigures">
        <div className="lostfigures__container">
          <div>

            {board.lostDarkFigure.length !== 0 &&
              <div>
                <p>Черные</p>
                < LostFigures
                  figures={board.lostDarkFigure}
                />
              </div>
            }
            {board.lostWhiteFigure.length !== 0 &&
              <div>
                <p>Белые</p>
                <LostFigures
                  figures={board.lostWhiteFigure}
                />
              </div>
            }
          </div>
          {board.lostDarkFigure.length === 0 && board.lostDarkFigure.length === 0 &&
            <div className="wrapper__lost_figure">
              <p className="lost_figure_text">Съеденые фигуры</p>
            </div>
          }
        </div>
      </div>
    </div >
  );
}

export default App;
