import React, { Component } from 'react'
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    };
    this.handleCarMove = this.handleCarMove.bind(this);
  }

  handleCarMove(name, value) {
    this.setState({
      [name]: value, 
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      carMove: this.handleCarMove,
    }
    return (
      <MyContext.Provider value={ contextValue } >
        <div>
          <Cars />        
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
