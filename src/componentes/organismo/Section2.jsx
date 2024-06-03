import Body from "../moleculas/Body";
import fondo from "../../data/fondo";
import './Section2.css'

function Section2 (){
    return (
        <div id="body">
{

       fondo.conta.map(contac =><Body image={contac.image}></Body>)
}
        </div>
    )
}

export default Section2