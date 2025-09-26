import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';

// Components
import NavBar from './components/Navigation';

// CSS
import './css/App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
