import React from 'react';
import logo from './assets/imgs/hostgator-logo.svg';
import './App.scss';
import Products from './containers/Products/Products';

function App() {
  return (
    <div className="App">
      {/* <section >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section> */}
        <Products/>
    </div>
  );
}

export default App;
