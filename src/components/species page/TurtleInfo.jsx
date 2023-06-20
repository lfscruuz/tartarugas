import { styled } from 'styled-components';

export default function TurtleInfo({ turtle }) {

  console.log(turtle)

  return (
    <MapLayout>
      <SpeciesDistributionLayout src={turtle.distribution} alt={turtle.name} id={`Element ${turtle.id}`} />
      <SpeciesInformation>
        <SpeciesPicture src={turtle.image} />
        <SpeciesName>
          <h3>{turtle.portuguese_name}</h3>
          <p>{turtle.scientific_name}</p>
          <SaibaMaisBtn>saiba mais</SaibaMaisBtn>
        </SpeciesName>
      </SpeciesInformation>
    </MapLayout>
  )
}

const MapLayout = styled.div`
  min-width: 100vw;
  background: rgb(109,233,249);
  background: linear-gradient(50deg, #1fb7cb 0%, rgba(122,251,231,1) 42%, rgba(255,211,211,1) 100%);  
  background-size: cover;
  background-attachment: fixed;

  position: relative;
`;

const SpeciesDistributionLayout = styled.img`
  margin: 12.5% 0;
  width: 100%;
`;

const SpeciesInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  left: 10rem;
  bottom:20rem;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 30px 15px -30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
`;

const SpeciesPicture = styled.img`
  object-fit: cover;

  width: 15rem;
  height: 15rem;

  `;

const SpeciesName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 7.5rem;
  width: 15rem;
  
  position: relative;
  margin: 0 2.5rem;

  /* font-size: 16px; */

  >h3{
    margin: 0;
  }
`;

const SaibaMaisBtn = styled.a`
  width: 7.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  bottom: 0;

  background: rgba(61, 61, 61, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.27);
  cursor: pointer;

  :active{
    background: rgba(195, 195, 195, 0.1);
  }
`;