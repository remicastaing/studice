import 'bootstrap-icons/font/bootstrap-icons.css';


function Dice({ valeur }) {
    return (
        <i className={`bi bi-dice-${valeur}`}></i>
    )
}


export default Dice