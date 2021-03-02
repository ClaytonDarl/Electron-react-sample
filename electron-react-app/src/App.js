import logo from './logo.svg';
import './App.css';
import React from 'react';
import BarChart from './BarChart';

class App extends React.Component {
  state = {
    data: [12,5,6,6,9,10],
    width: 700,
    height: 500,
    id: "root"
  }

  render() {
    return(
      <div className="App">
        <p>This is a chart in React</p> 
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    )
  }
}

export default App;
