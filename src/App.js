import './App.css';
import GaugeCluster from './components/GaugeCluster';
import config from './config'
import Datastream from './Datastream';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    Datastream.initialize(config,
      () => this.setState({connected: true}),
      () => this.setState({connected: false})
    );
  }

  render() {
    return (
      <div className="App">
        <GaugeCluster pages={config.pages}/>
      </div>
    );
  }
}
export default App;
