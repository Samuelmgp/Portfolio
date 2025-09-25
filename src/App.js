import logo from './logo.svg';
import Home from './pages/Home';
import NavBar from './components/Navigation';
import './css/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
