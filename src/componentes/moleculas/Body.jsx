
import ImgBody from '../atomos/ImgBody'
import './Body.css'

function Body (props){
    return (
        <div id='Bod'>
            <ImgBody image={props.image}></ImgBody>
        </div>
    )
}

export default Body