import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './nav/Nav';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Background from "./background/Background.jsx";
import PlayerStats from './playerStats/PlayerStats';


const App = () => {
  return (
    <Router>
    <Nav />
    <Background />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <PlayerStats />

  </Router>
  )
}

export default App
