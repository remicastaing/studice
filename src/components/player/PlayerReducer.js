export var playerInitialState = {
    global: 0,
    round: 0,
    dice: 0,
    dices: []
};



export function roll() {
    return {
        type: 'roll',
        dice: Math.floor(Math.random() * 6) + 1,
    }
}

export function hold() {
    return { type: 'hold' }
}

export function new_game() {
    return { type: 'new_game' }
}


export function PlayerReducer(state, action) {
    let newState;
    console.log(action)
    switch (action.type) {
        case 'roll':
            newState = {
                global: state.global,
                round: action.dice === 1 ? 0 : state.round + action.dice,
                dice: action.dice,
                dices: action.dice === 1 ? [] : [...state.dices, action.dice]
            }


            break;
        case 'hold':
            newState = {
                global: state.global + state.round,
                round: 0,
                dice: 0,
                dices: []
            }
            break;
        case 'new_game':
            newState = playerInitialState;
            break;
        default:

            throw new Error();
    }
    console.log(newState)
    return newState;
}
