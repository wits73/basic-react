import React, { Component, Fragment } from 'react';
//import MyName from './MyName';
import Counter from './Counter';
import {Iteration, LifeCycle, Func} from './components/samples';
import './App.css';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  
  render() {
    const name = 'react';
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycle color={this.state.color}/>
        <Func name={this.state.color}/>
      </div>
    );
  }
}

export default App;
