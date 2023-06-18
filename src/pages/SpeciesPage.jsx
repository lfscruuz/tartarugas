import { styled } from 'styled-components'
import Flatback from '/turtles/flatback.svg'
import GreenTurtle from '/turtles/greenTurtle.svg'
import Hawksbill from '/turtles/hawksbill.svg'
import KempsRidley from "/turtles/kempsRidley.svg"
import Leatherback from '/turtles/leatherback.svg'
import Loggerhead from '/turtles/loggerhead.svg'
import OliveRidley from '/turtles/oliveRidley.svg'
import SlideShow from '../components/species page/SlideShow'

export default function Especies() {

  const turtles = [
    {
      name: "flatback",
      image: Flatback
    },
    {
      name: "green turtle",
      image: GreenTurtle
    },
    {
      name: "hawksbill",
      image: Hawksbill
    },
    {
      name: "kemp's Ridley",
      image: KempsRidley
    },
    {
      name: "leatherback",
      image: Leatherback
    },
    {
      name: "loggerhead",
      image: Loggerhead
    },
    {
      name: "Olive Ridley",
      image: OliveRidley
    }
  ];

  return (
    <SpeciesPageContainer>
      <SlideShow turtles={turtles}/>
    </SpeciesPageContainer>
  )
}

const SpeciesPageContainer = styled.main`
  background: rgb(109,233,249);
  background: linear-gradient(50deg, #1fb7cb 0%, rgba(122,251,231,1) 42%, rgba(255,211,211,1) 100%);  
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;