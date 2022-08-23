import 'bootstrap-icons/font/bootstrap-icons.css';


function Dice({ valeur, addedClass }) {
    if (valeur===0){
        return (<i className={`bi bi-square `+addedClass}></i>)
    }
    return (
        <i className={`bi bi-dice-${valeur} `+addedClass}></i>
    )
}


export default Dice