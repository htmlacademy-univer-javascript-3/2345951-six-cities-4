import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

// eslint-disable-next-line react-refresh/only-export-components
const Settings = {
  placesNumber: 312
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesNumber={Settings.placesNumber} />
  </React.StrictMode>
);
