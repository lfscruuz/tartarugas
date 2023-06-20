import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

export default function SlideShow({ setSelected }) {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const timeoutRef = useRef(null);
  const delay = 3500;

  useEffect(() => {
    axios.get("http://localhost:5000/turtles").then((res) => {
      setData(res.data);
    })

    console.log(data);
  }, []);

  function resetTimeOut() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeOut();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeOut();
    };

  }, [index]);

  const handleClick = (turtle) => {
    const cardId = ('Card ' + turtle.id);
    setSelected(cardId);
  }
  return (
    <PageContent>
      {
        data === []
        ?
          <></>
        :
          <SlideShowContainer>
            <SlideShowSlider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {data.map((turtle) => {
                return (
                  <Slide key={turtle.id} id={`Card ${turtle.id}`}onClick={() => handleClick(turtle)}>
                    <SlideContent>
                      <img src={turtle.svg_icon} alt={turtle.english_name} />
                      <p>{turtle.portuguese_name}</p>
                    </SlideContent>
                  </Slide>
                )
              })}
            </SlideShowSlider>
            <SlideShowDots>
              {data.map((_, idx) => {
                return (
                  idx === index ?
                    <SlideShowDotActive key={idx} onClick={() => setIndex(idx)} /> : <SlideShowDotInactive key={idx} onClick={() => setIndex(idx)} />
                )
              })}
            </SlideShowDots>
          </SlideShowContainer>
      }
    </PageContent>
  );
}

const PageContent = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const SlideShowContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 25rem;
`;

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const Slide = styled.div`
display: inline-block;
cursor: pointer;

height: 23rem;
width: 100%;

`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 95%;
  height: 95%;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 30px 15px -30px rgba(0, 0, 0, 0.215);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
  border: 1px solid rgba(255, 255, 255, 0.27);

  >img{
    min-height: 85%;
    overflow: hidden;
  }
`;

const SlideShowDots = styled.div`
  text-align: center;
`;

const SlideShowDotInactive = styled.div`
  display: inline-block;
  
  height: 0.5em;
  width: 0.5em;
  cursor: pointer;
  margin: 2rem 1rem 0;

  background-color: rgba(153, 153, 153, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 50%;
`;

const SlideShowDotActive = styled.div`
  display: inline-block;
  
  height: 0.75em;
  width: 0.75em;
  cursor: pointer;
  margin: 2rem 1rem 0;

  background-color: rgba(39, 39, 39, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 50%;
`;