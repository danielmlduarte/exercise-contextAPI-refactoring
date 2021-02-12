import React, { Component } from 'react'
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import MyContext from './MyContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      signalColor: 'green',
    };
    this.handleCarMove = this.handleCarMove.bind(this);
    this.handleChangeSignal = this.handleChangeSignal.bind(this);
  }

  handleCarMove(name, value) {
    this.setState({
      [name]: value, 
    });
  }

  handleChangeSignal(value) {
    this.setState({
      signalColor: value,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      carMove: this.handleCarMove,
      changeSignal: this.handleChangeSignal,
    }
    return (
      <MyContext.Provider value={ contextValue } >
        <div>
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
