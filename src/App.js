import React, { Component } from 'react';
import Board from './Board';
import './App.css';
import ButtonBottom from './ButtonBottom';

import ScoreCard from './ScoreCard';


var Loader = require('react-loader');
var request = require('request-promise');

var style = {
  left: {
    top: "150px",
    marginLeft : "-297px"
  },
  right: {
    top: "150px",
    marginLeft : "60px",
    display : "inline"
  }

}


class App extends Component {
      constructor() {
          super();

          this.state = {
            isLoaded: false,
            items: {}
          };
          
      }




  componentDidMount(){
    const myHeaders = new Headers();
    
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'token: d78b62e1-abea-4021-ac85-f5766b879bb5')
    

    fetch('http://35.163.129.163:9000/reversi/game?token=d78b62e1-abea-4021-ac85-f5766b879bb5', { 
      method: 'GET', 
      headers: myHeaders,
 
  
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items : result

        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
 }

 resetCall(){

  var self=this;

  fetch('http://35.163.129.163:9000/reversi/game?token=d78b62e1-abea-4021-ac85-f5766b879bb5', { 
    method: 'DELETE'
  })
  .then(function (response) {
    setTimeout(function(){ self.updateCallBoard(); }, 1600);
    self.refs.Board.resetAnimation()
  })

 }



 movementCall(e){
  

    
    var API = 'http://35.163.129.163:9000/reversi/game/movements?token=d78b62e1-abea-4021-ac85-f5766b879bb5&x='+e.target.id[2]+'&y='+e.target.id[0];

    var self=this;
  
    fetch(API, { 
      method: 'POST'
    })
    .then(function (response) {
    //  self.refs.Board.renderBoard();
      //self.refs.Board.renderBoard();
      self.updateCallBoard();
   
    })
  
  }

 
  updateCallBoard(){


     const myHeaders = new Headers();
     
     myHeaders.append('Content-Type', 'application/json');
     myHeaders.append('Authorization', 'token: d78b62e1-abea-4021-ac85-f5766b879bb5')
     
 
     fetch('http://35.163.129.163:9000/reversi/game?token=d78b62e1-abea-4021-ac85-f5766b879bb5', { 
       method: 'GET', 
       headers: myHeaders,
  
   
     })
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           items : result
 
         });
       },
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
    
    }

  



 renderComponents(){

  if(this.state.isLoaded){
  return(  
    <div> 
      <Board movementCall={this.movementCall.bind(this)} items={this.state.items} ref="Board" >
      <ScoreCard style={style.left} score={this.state.items.whiteCount} text={"White Count"}/> 
      <ScoreCard style={style.right} score={this.state.items.blackCount} text={"Black Count"}/>
      </Board>
      <ButtonBottom currentPlayer={this.state.items.currentPlayer} toChild={this.resetCall.bind(this)}/>

    </div>);
  }
  else
    return null;


 }



  render() {
    const { isLoaded } = this.state;
    return (
      <div >
        
        {this.renderComponents()}
        <div className="loader-wrapper">
          <Loader loaded={isLoaded}>
          </Loader>
        </div>    
      </div>
    );
  }
}

export default App;
