import React from 'react';
import './App.css';
import ProgressBars from './components/progressBars';
import { validateData } from './validation/validateEndpoint';
import ErrorPage from './components/errorPage';

function App() {
  const isValidData = validateData(window.endpointConfig);
  if (!isValidData || !window.endpointConfig) return <ErrorPage />;

  const { buttons, bars, limit } = window.endpointConfig;
  const barsData = bars.map((bar, i) => {
    return { id: `${i}`, name: `Progress ${i + 1}`, value: bar };
  });

  return (
    <div className='App'>
      <div className='container'>
        <ProgressBars buttons={buttons} barsData={barsData} limit={limit} />
      </div>
    </div>
  );
}

export default App;
