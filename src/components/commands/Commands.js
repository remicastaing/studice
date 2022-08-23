import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Dice from "../Dice";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './commands.scss'


function Commands({ dispatch }) {

    const [dice, setDice] = useState(null);

    function onRoll() {
        var randomNumber = Math.floor(Math.random() * 6) + 1
        setDice(randomNumber)
        dispatch({ type: 'roll', dice: randomNumber });
    }

    function onHold() {
        setDice(null)
        dispatch({ type: 'hold' });
    }

    function onNewGame() {
        setDice(null)
        dispatch({ type: 'new_game' });
    }



    return (
        <>
        <div className="dice d-flex flex-column  justify-content-evenly text-center">
        <div style={{ 'fontSize': '10rem' }}>
                <Dice valeur={dice} addedClass={'icon '}></Dice>
            </div>
        </div>
        <div className="commands d-flex flex-column mb-3  justify-content-evenly text-center">


            <div className='p-2 d-grid gap-5'>
                <Button onClick={onNewGame} variant="btn-outline-light" className='mx-5 action' size="lg">
                    <i className="icon bi bi-plus-circle"></i> NEW GAME
                </Button>
            </div>



            <div className='p-2  d-grid gap-5'>

                <Button onClick={onHold} variant="btn-outline-light" className="action" size="lg">
                    <i className="icon bi bi-box-arrow-in-down"></i> HOLD
                </Button>

                <Button onClick={onRoll} variant="btn-outline-light" className="action" size="lg">
                    <i className="icon bi bi-arrow-repeat"></i> ROLL DICE
                </Button>

            </div>

        </div>
        </>
    )

}



export default Commands