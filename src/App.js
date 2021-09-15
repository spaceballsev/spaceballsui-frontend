import './App.css';
import GaugeCluster from './components/GaugeCluster';
import config from './config'

function App() {
  return (
    <div className="App">
      <GaugeCluster pages={config.pages}/>
    </div>
  );
}

export default App;
