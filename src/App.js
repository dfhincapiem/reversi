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
            isLoaded: false
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
    .then(res => console.log(res.json()))
    .then(
      (result) => {
        this.setState({
          isLoaded: true,

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



  render() {
    const { isLoaded } = this.state;
    return (
      <div >
       
        <Board ref="Board" />
        <ScoreCard />
        <ScoreCard />
        <ButtonBottom toChild={()=>this.refs.Board.resetAnimation()}/>
        <div className="loader-wrapper">
          <Loader loaded={isLoaded}>
          </Loader>
        </div>    
      </div>
    );
  }
}

export default App;
