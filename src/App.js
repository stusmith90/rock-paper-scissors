import React from "react";
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0,
      computer: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let playerValue = e.currentTarget.id;
    console.log(playerValue);
    let getComputerChoice = this.getComputerChoice();
    console.log(getComputerChoice);
    let winner = this.getWinner(playerValue, getComputerChoice);
    console.log(winner);
    this.whoWon(winner);
  }

  whoWon(winner) {
    if (winner === "player") {
      this.setState(state => {
        return { player: state.player + 1 };
      });
    } else if (winner === "computer") {
      this.setState(state => {
        return { computer: state.computer + 1 };
      });
    }
  }
  getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
      return "rock";
    } else if (rand <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  // Get game winner
  getWinner(p, c) {
    if (p === c) {
      return "draw";
    } else if (p === "rock") {
      if (c === "paper") {
        return "computer";
      } else {
        return "player";
      }
    } else if (p === "paper") {
      if (c === "scissors") {
        return "computer";
      } else {
        return "player";
      }
    } else if (p === "scissors") {
      if (c === "rock") {
        return "computer";
      } else {
        return "player";
      }
    }
  }
  render() {
    // textInput must be declared here so the ref can refer to it
    return (
      <>
        <div className="app">
          <header className="header">
            <h1>Rock Paper Scissors</h1>
            <button id="restart" className="restart-btn">
              Restart Game
            </button>
            <div id="score" className="score">
              <p>Player: {this.state.player}</p>
              <p>Computer: {this.state.computer}</p>
            </div>
          </header>
          <h2>Make Your Selection</h2>
          <div className="choices">
            <div id="rock" className="choice" onClick={this.handleClick}>
              <FaHandRock size={200} />
            </div>
            <div id="paper" className="choice" onClick={this.handleClick}>
              <FaHandPaper size={200} />
            </div>
            <div id="scissors" className="choice" onClick={this.handleClick}>
              <FaHandScissors size={200} />
            </div>
          </div>
        </div>
        <div className="modal">
          <div id="result" className="modal-content" />
        </div>
      </>
    );
  }
}

export default App;
