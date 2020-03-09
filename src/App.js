import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./components/Conversor"

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>CURRENCY C<span id="logo-o" class="fab fa-bitcoin"></span>NVERTER</h1>
        <img src={logo} className="App-logo" alt="react logo"></img>
      </header>
      <h2 id="name">Mateus S.</h2>

      <div className="row">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="row">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <div className="row">
        <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="GBP"></Conversor>
      </div>
    </div>
  );
}

export default App;
