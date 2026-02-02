import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

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
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
