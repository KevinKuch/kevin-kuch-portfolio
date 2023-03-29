import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projet from './components/projet/Projet';

export default function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Projet />
      </main>
    </div>
  );
}

