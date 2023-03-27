import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';

export default function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
      </main>
    </div>
  );
}

