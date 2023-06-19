import { styled } from 'styled-components'
import SlideShow from '../components/species page/SlideShow'
import TurtleInfo from './TurtleInfo'
import { turtles } from '../../api/database/turtles'
import { useEffect, useRef, useState } from 'react'

export default function Especies() {
  const [selected, setSelected] = useState(null);
  const [found, setFound] = useState(null);

  let turtleRef = useRef(selected);
  let infoRef = useRef(found);

  useEffect(() => {
    turtleRef.current = selected;
    console.log(turtleRef.current);
    console.log(selected);
  }, [selected]);

  useEffect(() =>{
    infoRef.current = found;
    found?.current?.scrollIntoView({behavior: "smooth"}); 
  }, [found])


  return (
    <SpeciesPageContainer>
      <SlideShow turtles={turtles} setSelected={setSelected}/>
      {turtles.map((turtle) => {  
        return (
          <TurtleInfo turtle={turtle} turtleRef={turtleRef} selected={selected} setFound={setFound}/>
        )
      })}
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