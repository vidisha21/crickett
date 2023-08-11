import React from 'react';
import './App.css';
import ScoreButtons from './components/scoreButtons';
import Scoreboard from './components/scoreBoard';


  
  

const App = () => {
  return (
    <div className="App">
            <h1>Cricket Score App</h1>
            <Scoreboard />
            <ScoreButtons  />
      
    </div>
  )
};

 export default App
