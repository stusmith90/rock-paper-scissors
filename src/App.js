import React from "react";
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa";
import "./App.css";

function App() {
  // textInput must be declared here so the ref can refer to it
  let rock = React.createRef();
  let paper = React.createRef();
  let scissors = React.createRef();

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target.id);
    console.log("The link was clicked.");
  }

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
          <div id="rock" class="choice" ref={rock} onClick={handleClick}>
            <FaHandRock size={200} />
          </div>
          <div id="paper" class="choice" ref={paper} onClick={handleClick}>
            <FaHandPaper size={200} />
          </div>
          <div
            id="scissors"
            class="choice"
            ref={scissors}
            onClick={handleClick}
          >
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
