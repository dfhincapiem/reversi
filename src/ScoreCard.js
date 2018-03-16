import React, { Component } from 'react';
import './ScoreCard.css';








class ScoreCard extends Component {


  render() {
    return (
      <div style={this.props.style} className="ScoreCard">
          <h1>
            {this.props.text}
          </h1>
          <p className="textshadow">{this.props.score}</p>

      </div>
    );
  }
}

export default ScoreCard;
