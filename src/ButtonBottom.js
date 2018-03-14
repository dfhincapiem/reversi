import React, { Component } from 'react';

import './ButtonBottom.css';





class ButtonBottom extends Component {
  resetGame = (event) => {

    this.props.toChild();
  
 }


  render() {
    return (
      <div >
         <h1 className="text">White's <br/>Turn</h1>
        <button onClick={this.resetGame.bind(this)} className="button"><span>RESET</span></button>
       
      </div>
    );
  }
}

export default ButtonBottom;
