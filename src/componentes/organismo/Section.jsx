import Header from "../moleculas/Header"
import logo from "../../data/logo"
import './Section.css'

function Section (){
    return (
        <div id="pag">
            {
           
                logo.conta.map(contra =><Header image={contra.image}></Header>)
            }
        </div>
    )
}

export default Section