import { styled } from 'styled-components'
import Flatback from '../../public/turtles svgs/flatback.svg'
import GreenTurtle from '../../public/turtles svgs/greenTurtle.svg'
import Hawksbill from '../../public/turtles svgs/hawksbill.svg'
import KempsRidley from "../../public/turtles svgs/kempsRidley.svg"
import Leatherback from '../../public/turtles svgs/leatherback.svg'
import Loggerhead from '../../public/turtles svgs/loggerhead.svg'
import OliveRidley from '../../public/turtles svgs/oliveRidley.svg'

export default function Especies() {
  return (
    <SpeciesPageContainer>
      <img src={Flatback}/>
      <img src={GreenTurtle}/>
      <img src={Hawksbill}/>
      <img src={KempsRidley}/>
      <img src={Leatherback}/>
      <img src={Loggerhead}/>
      <img src={OliveRidley}/>
    </SpeciesPageContainer>
  )
}

const SpeciesPageContainer = styled.main`
  background: rgb(109,233,249);
  background: linear-gradient(50deg, rgba(109,233,249,1) 0%, rgba(122,251,231,1) 42%, rgba(255,211,211,1) 100%);  
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  min-height: 100vh;

  >img{
    width: 25em;
  }
`;