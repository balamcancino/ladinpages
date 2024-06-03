import Section from "../componentes/organismo/Section"
import Section2 from "../componentes/organismo/Section2"
import Section3 from "../componentes/organismo/Section3"
import Section4 from "../componentes/organismo/Section4"
import './Home.css'

function Home (){
    return (
        <div>

        <Section></Section>
        <div>
        <Section2></Section2>

        </div>

        <div id="sec">
        <Section3></Section3>
        </div>
        <div id="jug">
        <Section4></Section4>

        </div>
        

        </div>
    )
}

export default Home