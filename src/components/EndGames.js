import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "O WON" : "X WON"}</span>}
      {draw && <span className="win-text">DRAW GAME</span>}

      <span className="win-history">
        X WINS: {winCount.X}
        <br />O WINS: {winCount.O}
      </span>

      <button className="btn" onClick={restartGame}>
        НАЧАТЬ ИГРУ
      </button>
      <button className="btn" onClick={clearHistory}>
        ИСТОРИЯ
      </button>
    </div>
  );
}

export default EndGame;
