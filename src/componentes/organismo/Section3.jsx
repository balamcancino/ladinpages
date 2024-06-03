import Cuerpo from "../moleculas/Cuerpo"
import cuerpo from "../../data/cuerpo"
import './Section3.css'

function Section3 (){
    return (
        <div id="section3">
        {
            cuerpo.contacs.map(contracs=><Cuerpo image={contracs.image}></Cuerpo>)
        }
        </div>
    )
}

export default Section3