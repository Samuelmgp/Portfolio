import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Resume from './pages/Resume';

// Components
import NavBar from './components/Navigation';

// CSS
import './css/App.css'
import './Canvas'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
