import ImgCuerpo from "../atomos/ImgCuerpo"
import './Cuerpo.css'

function Cuerpo(props){
    return(
        <div id="cuerpo">
        <ImgCuerpo image={props.image}></ImgCuerpo>
        </div>
    )
}

export default Cuerpo