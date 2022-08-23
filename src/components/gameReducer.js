

const SEUIL = 100;

function newPlayer(id) {
    return {
        id: id,
        global: 0,
        round: 0,
        dices: []
    };
}

function nextPlayer(currentPlayer, players) {
    return (currentPlayer + 1) % players.length;
}

function roll(playerState, dice) {
    return {
        id: playerState.id,
        global: playerState.global,
        round: dice === 1 ? 0 : playerState.round + dice,
        dices: dice === 1 ? [] : [...playerState.dices, dice],
    }
}

function hold(playerState) {
    return {
        id: playerState.id,
        global: playerState.global + playerState.round,
        round: 0,
        dices: [],
    }
}

export const gameInitialState = {
    dice: null,
    players: [newPlayer(1)],
    currentPlayer: 0,
    started: false,
    vainqueur: null
}

export function immerGameReducer(draft, action) {

    switch (action.type) {
        case 'roll':

            draft.dice = action.dice;
            draft.players[draft.currentPlayer] = roll(draft.players[draft.currentPlayer], action.dice);
            draft.currentPlayer = nextPlayer(draft.currentPlayer, draft.players);
            draft.started = true;

            break;
        case 'hold':

            draft.dice = null;
            draft.started = true;

            draft.players[draft.currentPlayer] = hold(draft.players[draft.currentPlayer]);

            if (draft.players[draft.currentPlayer].global >= SEUIL) {
                draft.vainqueur = draft.players[draft.currentPlayer];
            } else {
                draft.currentPlayer = nextPlayer(draft.currentPlayer, draft.players);
            }


            break;
        case 'add_player':

            draft.players.push(newPlayer(draft.players.length + 1))

            break;
        case 'remove_player':

            draft.players.pop()

            break;
        case 'new_game':
            draft.dice= null;
            draft.players= [newPlayer(1)];
            draft.currentPlayer= 0;
            draft.started= false;
            draft.vainqueur= null;
            break;
        default:

            throw new Error();
    }
}