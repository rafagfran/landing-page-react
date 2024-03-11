import Header from './components/layout/Header';
import Main from './components/sections/PriceSimulation';
import EconomySimulator from './components/sections/EconomySimulator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <EconomySimulator/>
      <Main />
      
    </div>
  );
}

export default App;
