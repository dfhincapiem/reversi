import React, { Component } from 'react';

import './Cell.css';
var $ = require('jquery');


class Cell extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     initial : true

  //   }

  //   this.resetAnimation.bind(this)
  // }
  
  

    
    resetAnimation(){

    
    if($('.Cell').hasClass('CellAnimation')){
      $('.Cell').removeClass("CellAnimation").addClass("CellAnimation3");
    }     
      else{
        var test = document.getElementsByClassName("Cell");
        for(var i=0;i<test.length;i++){
          test[i].className="Cell"
              void test[i].offsetWidth;
              test[i].className="Cell CellAnimation3";
            }
   
      }


      
    }


    renderCell(){
      if(this.props.cellPiece==="W"){
        
            return (
              
              <div className="White">
              </div>
            );
      }
      else if(this.props.cellPiece==="B") {
        return (
          
          <div className="Black">
          </div>
        );

      }
      else {
        return (
          
          <div className="">
          </div>
        );
      }

    }





  render() {
    
    return (
      
      <div onClick={this.props.movementCall.bind(this)} className="flip-box Cell CellAnimation" id={this.props.id}>
        <div className="flip-box-inner">
          <div className="flip-box-front">
          {this.renderCell()}
          </div>
          <div className="flip-box-back">
          </div>
        </div>
      </div>
    );
  }
}

export default Cell;