import React from 'react';

import Player from "../components/player/Player";
import VictoireModal from "../components/VictoireModal";
import Commands from "../components/commands/Commands";
import Footer from "./Footer";





import { immerGameReducer, gameInitialState } from "../services/gameReducer";
import { useImmerReducer } from "use-immer";

function Studice() {


    const [state, dispatch] = useImmerReducer(immerGameReducer, gameInitialState);



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

            {!state.started && <Footer dispatch={dispatch} nb_player={state.players.length}></Footer>}
        </>
    )
}


export default Studice