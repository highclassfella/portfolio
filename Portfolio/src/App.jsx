import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';


const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />

    </main>
    </>
  )
}

export default App