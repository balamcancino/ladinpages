import ImgLogo from '../atomos/ImgLogo'
import Titulo from '../atomos/Titulo'
import './Header.css'

function Header (props){
    return (
        <div id='car'>
            <Titulo text={props.text}></Titulo>
            <ImgLogo image={props.image}></ImgLogo>
        </div>
    )
}

export default Header