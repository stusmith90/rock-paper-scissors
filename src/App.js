import React from "react";
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <div class="app">
        <header class="header">
          <h1>Rock Paper Scissors</h1>
          <button id="restart" class="restart-btn">
            Restart Game
          </button>
          <div id="score" class="score">
            <p>Player: 0</p>
            <p>Computer: 0</p>
          </div>
        </header>
        <h2>Make Your Selection</h2>
        <div class="choices">
          <div id="rock" class="choice">
            <FaHandRock size={200} />
          </div>
          <div id="paper" class="choice">
            <FaHandPaper size={200} />
          </div>
          <div id="scissors" class="choice">
            <FaHandScissors size={200} />
          </div>
        </div>
      </div>
      <div class="modal">
        <div id="result" class="modal-content" />
      </div>
    </>
  );
}

export default App;
