import Header from './components/header';
import './styles/global.css';
import Intro from './components/intro';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <div className='content'>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
