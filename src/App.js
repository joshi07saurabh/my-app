// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: 'black', padding: '10px 0', marginBottom: '20px' }}>
          <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'left' }}>
            <li style={{ marginRight: '10px' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
