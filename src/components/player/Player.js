import { React } from 'react';

import './player.scss'
import logo from '../../assets/logo.svg';
import Dice from "../Dice";
import 'bootstrap-icons/font/bootstrap-icons.css';


function Player({ player, actif }) {

    return (
        <>
            <div className="d-flex">
                <div className="flex-fill "></div>
                <div className="d-flex flex-column justify-content-evenly text-center">
                    <div className="p-2"><img src={logo} className={`logo filter-dice ${actif ? 'animated-logo' : ''}`} alt='logo'></img></div>
                    <div className="name">PLAYER {player.id}</div>
                    <div className="global">{player.global}</div>
                    <div className="square">
                    <div className='round col-4 text-center p-1'>
                        <div className={'p-3'}>Current</div>
                        <div className='round-count p-3'>{player.round}</div>
                        <h3>
                            <div className="d-flex align-content-start flex-wrap">

                                {player.dices.map(((dice, index) => <Dice key={'d-' + player.id + '-' + index} valeur={dice} addedClass={'dices'}></Dice>))}

                            </div>
                        </h3>
                    </div>
                </div>
                </div>
                <div className="flex-fill"></div>
            </div>
        </>
    )
}

export default Player