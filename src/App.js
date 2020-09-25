import React from 'react';
import './App.css';
import './components/Home';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <section style={{ paddingTop: 55 + 'px' }}>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </section>
      </Router>
    </div>
  );
}

export default App;
