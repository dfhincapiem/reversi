import React, { Component } from 'react';
import Board from './Board';
import './App.css';
import ButtonBottom from './ButtonBottom';

import ScoreCard from './ScoreCard';


var Loader = require('react-loader');
var request = require('request-promise');


class App extends Component {
      constructor() {
          super();

          this.state = {
            isLoaded: false,
            items: {}
          };
          
      }



      // toggleLoader() {
      //   this.setState({ isLoaded: !this.state.isLoaded });
      // }

      // renderControl(isLoaded) {
      //   let buttonText = isLoaded ? 'Show Loading Spinner' : 'Hide Loading Spinner';
      //   return <button onClick={() => this.toggleLoader()}>{buttonText}</button>;
      // }

  

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
      <Board movementCall={this.movementCall.bind(this)} items={this.state.items} ref="Board" />
      <ScoreCard  /> 
      <ScoreCard />
      {/* <ButtonBottom toChild={()=>this.refs.Board.resetAnimation()}/> */}
      <ButtonBottom toChild={this.resetCall.bind(this)}/>

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
