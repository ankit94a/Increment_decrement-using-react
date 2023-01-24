import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="container">
        <h1 className="heading ">
          Simple{" "}
          <spam className="text-3xl font-bold underline bg-blend-color-dodge">
            Inc
          </spam>
          rement And <spam className="text-red-300">Dec</spam>rement value using
          Buttons
        </h1>
        <div className="flex items-center ...">
          <button onClick={this.increment} className="btn">
            +
          </button>
          <h1 className="font-sans md:font-serif">{this.state.count}</h1>
          <button onClick={this.decrement} className="btn">
            -
          </button>
        </div>
        
      </div>
    );
  }
}

export default App;
