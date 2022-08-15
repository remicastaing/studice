import React, { useState } from 'react';

import Player from "../components/player/Player";
import VictoireModal from "../components/VictoireModal";
import Footer from "./Footer";
import logo from '../assets/logo.svg';
import Button from 'react-bootstrap/Button';

function Studice() {

    const [players, setPlayers] = useState([1]);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [vainqueur, setVainqueur] = useState(0);
    const [restart, setRestart] = useState(false);
    const [started, setStarted] = useState(false);

    function reset() {
        setStarted(false);
        setRestart(true);
        setVainqueur(0);
        setCurrentPlayer(1)
    }

    function victoire(vainqueur) {
        setVainqueur(vainqueur)
    }

    function onNext() {
        setStarted(true);
        setCurrentPlayer(currentPlayer % players.length + 1);
    }

    function newGame() {
        reset();
        setTimeout(() => { setRestart(false) }, 500);
    }

    function addPlayer() {
        setPlayers([...players, players.length + 1]);
        console.log(players)
    }

    function removePlayer() {
        setPlayers(Array.from({ length: players.length - 1 }, (_, i) => i + 1));
        console.log(players)
    }


    if (restart) {
        return <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>

            </div>
        </div>
    }
    return (
        <div>
            <div className="alert alert-success float-end ">

            </div>
            <div class="row g-5">
                {players.map((player => <div class="col-6 p-5"><Player key={player} player={player} onNext={onNext} onVictoire={victoire} activePlayer={player === currentPlayer}></Player></div>))}
            </div>
            <VictoireModal
                onHide={newGame}
                vainqueur={vainqueur}
            />
            <Footer>
                {!started && players.length < 4 && <Button onClick={addPlayer} variant="outline-primary" className='mx-5'>
                    <i className="bi bi-person-plus"></i> Ajouter un joueur
                </Button>}
                {!started && players.length > 1 && <Button onClick={removePlayer} variant="outline-primary" className='mx-5'>
                    <i className="bi bi-person-dash"></i> Supprimer un joueur
                </Button>}
                {started && <Button onClick={newGame} variant="outline-primary" className='mx-5'>
                    <i className="bi bi-plus-circle"></i> New game
                </Button>}
            </Footer>
        </div>
    )
}


export default Studice