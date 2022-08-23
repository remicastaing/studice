import React from 'react';

import Player from "../components/player/Player";
import VictoireModal from "../components/VictoireModal";
import Commands from "../components/commands/Commands";
import Footer from "./Footer";

import Button from 'react-bootstrap/Button';



import { immerGameReducer, gameInitialState } from "./gameReducer";
import { useImmerReducer } from "use-immer";

function Studice() {


    const [state, dispatch] = useImmerReducer(immerGameReducer, gameInitialState);

    function addPlayer() {
        dispatch({ type: 'add_player' });
    }

    function removePlayer() {
        dispatch({ type: 'remove_player' });
    }

    function newGame() {
        dispatch({ type: 'new_game' })
    }

    return (
        <>
            <div className={'game d-flex flex-column justify-content-around'}>
            {state.players.length < 3 && <div className='flex-fill'></div>}
                <div className='row' style={{minHeight: '100%'}}>
                    {state.players.map((player => <div key={'p-' + player.id} className={`col-6  d-flex flex-column justify-content-evenly`} style={{backgroundColor : (player.id%2===0) ^ (Math.round(player.id/2)%2 ===1)? '#DFDFDF' : 'white'}}><Player player={player} actif={player.id === state.currentPlayer + 1}></Player></div>))}
                </div>
                <div className='flex-fill'></div>
                    
            </div>
            <VictoireModal
                onHide={newGame}
                vainqueur={state.vainqueur}
            />

            <Commands dispatch={dispatch} started={state.started}></Commands>

            {!state.started && <Footer>
                {!state.started && state.players.length < 4 && <Button onClick={addPlayer} variant="outline-primary" className='mx-5'>
                    <i className="icon bi bi-person-plus"></i> Ajouter un joueur
                </Button>}
                {!state.started && state.players.length > 1 && <Button onClick={removePlayer} variant="outline-primary" className='mx-5'>
                    <i className="icon bi bi-person-dash"></i> Supprimer un joueur
                </Button>}
            </Footer>}
        </>
    )
}


export default Studice