import SlideShow from '../components/species page/SlideShow'
import TurtleInfo from '../components/species page/TurtleInfo'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { styled } from 'styled-components'
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

  useEffect(() => {
    if (selected !== null) {
      const newId = selected.replace("Card", "Element");
      let element = document.getElementById(newId);
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selected])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <SpeciesPageContainer>
      <SlideShow setSelected={setSelected} />
      {
        data === null ? <></> : data.map((turtle) => {
          return (
            <>
              <TurtleInfo turtle={turtle} />
            </>
          )
        })

      }
      <BackToTop onClick={scrollToTop}>
        <ArrowToTop />
      </BackToTop>
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

const BackToTop = styled.button`
  width: 5rem;
  height: 5rem;
  
  position: fixed;
  z-index: 1;
  right: 5em;
  bottom: 5em;
  
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 10px 10px 20px -30px rgba(0, 0, 0, 0.215);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
  border: 1px solid rgba(255, 255, 255, 0.27);
  border-radius: 50%;

  cursor: pointer;
`;

const ArrowToTop = styled(AiOutlineArrowUp)`
  font-size: 2.5rem;
`;