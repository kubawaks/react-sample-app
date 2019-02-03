import React, {Component} from 'react';
import './styles/App.css';
import ATMContainer from "./components/ATMContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
          <ATMContainer/>
      </div>
    );
  }
}

export default App;
