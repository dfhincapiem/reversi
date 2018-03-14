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


  render() {
    
    return (
      <div className="Cell CellAnimation" id={this.props.id}>
        <div className="">
        </div>
      </div>
    );
  }
}

export default Cell;