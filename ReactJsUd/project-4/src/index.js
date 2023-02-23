import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';
import { Home } from './templates/home/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home tem-uma-prop-aqui='O valor dela'/>
    </CounterContextProvider>
  </React.StrictMode>
);
