import { React, useReducer, useEffect } from 'react';
import { PlayerReducer, playerInitialState, roll, hold } from "./PlayerReducer";
import './player.scss'
import logo from '../../assets/logo.svg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dice from "./Dice";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Player({ player, onVictoire, onNext, activePlayer }) {
    const [state, dispatch] = useReducer(PlayerReducer, playerInitialState);

    useEffect(() => {
        if (state.global >= 10) {
            onVictoire(player)
        }
    }, [state.global, onVictoire, player])

    function onHold() {
        dispatch(hold());
        onNext();
    }

    function onRoll() {
        dispatch(roll())
        onNext();
    }

    return (
        <Card border="primary" >

            <div className="d-flex flex-fill flex-column mb-3 justify-content-around " >

                <div className="d-flex flex-fill">
                    <div className="p-2 flex-fill "></div>
                    <div className="d-flex flex-column p-2 justify-content-around text-center">
                        <div className="p-2"><img src={logo} className={`logo filter-dice ${activePlayer ? 'animated-logo' : ''}`} alt='logo'></img></div>
                        <div className="p-2 player">PLAYER {player}</div>
                        <div className="p-2 global">{state.global}</div>
                    </div>
                    <div className="p-2 flex-fill"></div>
                </div>
                <div className="p-2 d-flex flex-row flex-fill justify-content-around">
                    <div className='p-2 '>
                        {activePlayer && <Button onClick={onHold} variant="outline-primary" disabled={!activePlayer} className="action">
                            <i className="bi bi-box-arrow-in-down"></i> HOLD
                        </Button>}

                    </div>
                    <div className='p-2 text-center round'>Current
                        <br></br><div className='round-count'>{state.round}</div></div>
                    <div className='p-2 '>
                        {activePlayer && <div>
                            <Button onClick={onRoll} variant="outline-primary" disabled={!activePlayer} className="action">
                                <i className="bi bi-arrow-repeat"></i> ROLL DICE
                            </Button>
                            <br></br>
                        </div>}
                        <h1>
                            {state.dices.map((dice => <Dice valeur={dice}></Dice>))}
                        </h1>
                    </div>
                </div>
            </div>
        </Card>)
}

export default Player