import React from "react";
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerValue: "", computerValue: "" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ playerValue: e.currentTarget.id });
    this.getComputerChoice();
  }

  getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
      this.setState({ computerValue: "rock" });
    } else if (rand <= 0.67) {
      this.setState({ computerValue: "paper" });
    } else {
      this.setState({ computerValue: "scissors" });
    }
  }

  render() {
    const scoreboard = {
      player: 0,
      computer: 0
    };

    console.log(this.state.playerValue);
    console.log(this.state.computerValue);
    // textInput must be declared here so the ref can refer to it
    let rock = React.createRef();
    let paper = React.createRef();
    let scissors = React.createRef();
    return (
      <>
        <div className="app">
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
            <button
              id="rock"
              class="choice"
              ref={rock}
              onClick={this.handleClick}
            >
              <FaHandRock size={200} />
            </button>
            <button
              id="paper"
              class="choice"
              ref={paper}
              onClick={this.handleClick}
            >
              <FaHandPaper size={200} />
            </button>
            <button
              id="scissors"
              class="choice"
              ref={scissors}
              onClick={this.handleClick}
            >
              <FaHandScissors size={200} />
            </button>
          </div>
        </div>
        <div class="modal">
          <div id="result" class="modal-content" />
        </div>
      </>
    );
  }
}

export default App;
