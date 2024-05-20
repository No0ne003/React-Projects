import { Button } from "@/components/ui/button";
import { useState } from "react";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  function handleClick(currentSquare) {
    if (winner || squares[currentSquare] || isDraw) return;

    let cpySquares = [...squares];
    cpySquares[currentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);

    const gameWinner = checkWinner(cpySquares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!cpySquares.includes("")) {
      // Check for draw if all squares are filled
      setIsDraw(true);
    }
  }

  function checkWinner(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i * 3] !== "" &&
        board[i * 3] === board[i * 3 + 1] &&
        board[i * 3] === board[i * 3 + 2]
      ) {
        return board[i * 3];
      }
      console.log(board[i * 3 + 1]);
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i] !== "" &&
        board[i] === board[i + 3] &&
        board[i] === board[i + 6]
      ) {
        return board[i];
      }
    }

    // Check diagonals
    if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
      return board[0];
    }
    if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
      return board[2];
    }

    return null;
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
    setWinner(null);
    setIsDraw(false);
  }

  return (
    <div className="tic-tac-toe container flex flex-1 flex-col justify-center items-center py-10">
      <div className="flex items-center py-10 h-[50px]">
        {winner ? (
          <div className="text-4xl">
            Winner is{" "}
            <span className="font-bold font-mono text-primary">{winner}</span>
          </div>
        ) : isDraw ? (
          <div className="text-5xl">It&apos;s a draw!</div>
        ) : null}{" "}
      </div>
      <div className="shadow-2xl">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>

      <div className="flex items-center py-10 h-[50px]">
        {winner || isDraw ? (
          <Button onClick={handleRestart}>Restart</Button>
        ) : null}
      </div>
    </div>
  );
};

export const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-primary float-left text-4xl size-[100px] text-center mr-[-1px] mt-[-1px] cursor-pointer empty:hover:bg-primary/5 hover:bg-black hover:bg-opacity-5 font-sans font-bold flex justify-center items-center outline-none"
    >
      {value}
    </button>
  );
};

export default TicTacToe
