import BoardComponent from "./components/BoardComponent";
import { useEffect, useState } from "react";
import Board from "./models/Board";

function App() {

  const [board, setBoard] = useState(new Board);

  function restart() {
    const initialBoard = new Board;
    initialBoard.initialChunk();
    initialBoard.addFigure();
    setBoard(initialBoard);
  }

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
