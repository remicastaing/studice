import Button from 'react-bootstrap/Button';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}




function Footer({ dispatch, nb_player }) {

    function addPlayer() {
        dispatch({ type: 'add_player' });
    }

    function removePlayer() {
        dispatch({ type: 'remove_player' });
    }

    return (
        <div style={style}>
            {nb_player< 4 && <Button onClick={addPlayer} variant="outline-primary" className='mx-5'>
                <i className="icon bi bi-person-plus"></i> Ajouter un joueur
            </Button>}
            {nb_player> 1 && <Button onClick={removePlayer} variant="outline-primary" className='mx-5'>
                <i className="icon bi bi-person-dash"></i> Supprimer un joueur
            </Button>}
        </div>

    )
}

export default Footer