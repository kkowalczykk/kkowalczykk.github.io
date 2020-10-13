import React, { useState } from 'react';
import './App.css';
import './components/Home';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ProjectDetails from './components/ProjectDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { useEffect } from 'react';

const Wrapper = styled.section`
  min-height: 100vh;
  padding-top: 55px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
`

function App() {

  const [title, setTitle] = useState('');



  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop></ScrollToTop>
        <Wrapper>
          {title === 'Home' ? null : <Header title={title}></Header>}
          <Route path='/' exact render={(props) => <Home {...props} updateTitle={setTitle} />} />
          <Route path='/about' render={(props) => <About {...props} updateTitle={setTitle} />} />
          <Route path='/skills' render={(props) => <Skills {...props} updateTitle={setTitle} />} />
          <Route path='/projects' render={(props) => <Projects {...props} updateTitle={setTitle} />} />
          <Route path='/contact' render={(props) => <Contact {...props} updateTitle={setTitle} />} />
          <Route path='/test' render={(props) => <ProjectDetails {...props} updateTitle={setTitle} />} />
          <Route path='/' render={(props) => <Footer {...props} />} />
        </Wrapper>
      </Router>

    </div >
  );
}

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <React.Fragment />
  );
}

export default App;
