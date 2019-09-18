import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';




class Board extends Component {

  constructor(props){
    super(props);
    this.renderBoard = this.renderBoard.bind(this);
    
  }


  resetAnimation(){
    
      this.refs.Cell.resetAnimation();
  }

  renderBoard(){
    this.renderCell();
  }


  


  renderCell(){
   
    var idents =[];
     for(var i =0; i<8;i++){
        for(var k=0; k<8;k++){
       
        idents.push(<Cell movementCall={this.props.movementCall} cellPiece={this.props.items[i][k]} ref="Cell" renderBoard={this.renderBoard} key={i+"_"+k} id={i+"_"+k}></Cell>);
        }
    }
    return(idents)
  }


  render() {
    return (
      <div className="Board">
        {this.renderCell()}
        {this.props.children}
      </div>
    );
  }
}

export default Board;
  