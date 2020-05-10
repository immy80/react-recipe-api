import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = '2a538a1a';
  const APP_KEY = '6988e3cd04946467a744df460214c895';

  const examplereq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className='App'>
      <h1>hello</h1>
    </div>
  );
};

export default App;
