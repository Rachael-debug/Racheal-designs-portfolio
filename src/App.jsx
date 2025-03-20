import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {


  return (
    <>
    <Header/>
    <About/>
    <hr />
    <section id="works"></section>
    <Works/>
    <hr/>
    <Contact/>
    </>
  );
}

export default App;
