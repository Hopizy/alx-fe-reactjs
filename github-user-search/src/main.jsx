import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ this line is required
import App from './App';
import './index.css'; //import Tailwind css here
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
