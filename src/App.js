import { useState } from 'react';
import logo from './assets/logo.svg';
import './App.scss';


import Button from 'react-bootstrap/Button';

import Studice from "./components/Studice";

function App() {
  const [gameStarted, setGameStarted] = useState(false);


  function startGame() {
    setGameStarted(true)
  }

  if (gameStarted) {
    return <Studice />
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo filter-dice" alt="logo" />
          <Button onClick={startGame} variant="outline-primary">
            Start game
          </Button>
        </header>

      </div>
    );
  }

}

export default App;
