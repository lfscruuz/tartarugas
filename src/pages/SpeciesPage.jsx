import { styled } from 'styled-components'
import SlideShow from '../components/species page/SlideShow'
import TurtleInfo from './TurtleInfo'
import { turtles } from '../../api/database/turtles'
import { useRef } from 'react'

export default function Especies() {
  
  return (
    <SpeciesPageContainer>
      <SlideShow turtles={turtles}/>
      <TurtleInfo turtles={turtles} />
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