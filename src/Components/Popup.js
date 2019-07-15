import React from "react";
import "../App.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <p>player Choice: {this.props.playerChoice}</p>
          <p>Computer Choice: {this.props.computerChoice}</p>
          <button onClick={this.props.handleClick}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;
