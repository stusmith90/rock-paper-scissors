import React from "react";
import "../App.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <p>Player Choice: {this.props.playerChoice}</p>
          <p>Computer Choice: {this.props.computerChoice}</p>
          <p>Winner: {this.props.winner}</p>
        </div>
      </div>
    );
  }
}

export default Popup;
