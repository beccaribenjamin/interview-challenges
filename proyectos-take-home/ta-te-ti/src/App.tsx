import { useState } from "react";

const GRID = Array.from(Array(9).keys());

type Persona = 0 | 1;
type Board = (string | null)[];

function App() {
  const [player, setPlayer] = useState<Persona>(0);
  const [board, setBoard] = useState<Board>(Array(9).fill(null));

  const handleClick = (indice: number) => {
    if (board[indice]) return;

    const newBoard = [...board];

    newBoard[indice] = player === 0 ? "X" : "O";
    setBoard(newBoard);
    setPlayer(player === 0 ? 1 : 0);
  };

  return (
    <main>
      {GRID.map((i) => (
        <div key={i} className="square" onClick={() => handleClick(i)}>
          {board[i]}
        </div>
      ))}
    </main>
  );
}

export default App;
