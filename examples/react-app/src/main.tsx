import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineCustomElements } from '@lux/components/loader';
import App from './App';
import '@lux/components/dist/lux/lux.css';

// Register custom elements
defineCustomElements();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
