import BodyJuegos from "../moleculas/BodyJuegos";
import juegos from "../../data/juegos";
import './Section4.css'

function Section4 (){
    return (
        <div id="sec_jueg">
        {
            
            juegos.conta.map(contacs=><BodyJuegos image={contacs.image} text={contacs.text}></BodyJuegos>)
        }
        </div>
    )
}
export default Section4