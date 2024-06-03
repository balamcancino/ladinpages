import ImgJuegos from "../atomos/ImgJuegos";
import TexJuegos from "../atomos/TextJuegos";
import './BodyJuegos.css'

function BodyJuegos(props){
    return (
    <div id="car_jueg"> 
        <ImgJuegos image={props.image}></ImgJuegos>
        <TexJuegos text={props.text}></TexJuegos>
        </div>
        )
}

export default BodyJuegos