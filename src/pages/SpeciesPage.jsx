import { styled } from 'styled-components'
import SlideShow from '../components/species page/SlideShow'
import TurtleInfo from './TurtleInfo'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Especies() {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {

    axios.get("http://localhost:5000/turtles").then((res) => {
      setData(res.data);
    })
  }, []);

  useEffect(() =>{
    if (selected !== null){
      const newId = selected.replace("Card", "Element");
      let element = document.getElementById(newId);
      element?.scrollIntoView({behavior: 'smooth'})
    }
  }, [selected])



  return (
    <SpeciesPageContainer>
      <SlideShow setSelected={setSelected} />
      {
        data === null ? <></> : data.map((turtle) => {
          return (
            <>
              <TurtleInfo turtle={turtle}/>
            </>
          )
        })

      }
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