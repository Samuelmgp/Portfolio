import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

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
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
