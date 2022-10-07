import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import Context from './Context';
import Note from './Components/Note/Note';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
    
      <App />
      <Note/>
    </Context>
    </BrowserRouter>
  </React.StrictMode>
);


