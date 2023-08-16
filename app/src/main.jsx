import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { defineCustomElements } from "component-library/dist/loader";
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

