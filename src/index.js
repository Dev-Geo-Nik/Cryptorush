import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CoinsProvider } from "./context/coins/CoinsContext";


const app = [
  <CoinsProvider>
      <App />
  </CoinsProvider>
]




ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);
