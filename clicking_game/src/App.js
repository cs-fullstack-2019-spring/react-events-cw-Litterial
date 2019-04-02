import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clicking from './Clicking'

//App is the parent
class App extends Component {
  state={add:1};  //state is add 1 by default

  constructor(props)
  {
    //lets parent know of any cha
    super(props)
  }

  plus1= (e)=>
  {
    //when this button is pressed the score counter goes up by 1
    this.setState({add:1})
  };
  plus5=(e)=>
  {
    //when this button is pressed the score counter goes up by 5
    this.setState({add:5})
  };

  plus10= (e)=>
  {
    //when this button is pressed the score counter goes up by 5
    this.setState({add:10})
  };
   //this.state.add will change the value of the incrementer
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={this.plus1}>
              1pt
            </button>
          <button onClick={this.plus5}>
            5pt
          </button>
            <button onClick={this.plus10}>
              10pt
            </button>
          </div>
        <div className='grid'>
        <Clicking
        Number='1' add={this.state.add}/>
        <Clicking
        Number={'2'} add={this.state.add}/>
        <Clicking
        Number={'3'} add={this.state.add}/>
        </div>

        </header>
      </div>
    );
  }
}

export default App;
