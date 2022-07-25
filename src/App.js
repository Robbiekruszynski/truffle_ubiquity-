import logo from './logo.svg';
import './App.css';
import { Metamask } from './MetaMask.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Connect Wallet</button>
        <h3>Wallet Adrress: XXXX</h3>
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
         Blockdaemon
        </p>
       
      </header>
    </div>
  );
}

export default App;
