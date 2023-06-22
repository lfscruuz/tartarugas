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
          <p><strong>dieta:</strong> {turtle.diet}</p>
          <p><strong>tamanho:</strong> {turtle.size}</p>
          <p><strong>status:</strong> {turtle.status.portuguese_name}</p>
        </SpeciesName>
      </SpeciesInformation>
      <ConservationStatus src={turtle.status.svg_icon}/>
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

  background: rgba(255, 255, 255, 0.4);
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
  height: 10rem;
  width: 15rem;
  
  position: relative;
  margin: 0 2.5rem;

  /* font-size: 16px; */

  >h3{
    margin: 0 0 0 2px;
  }
  >p{
    margin-top: 4px;
  }
`;

const ConservationStatus = styled.img`
  width: 112px;
  height: 112px;
  padding: 0;
  
  position: absolute;
  right: 15em;
  top: 15em;
  
  background: rgba(100, 100, 100, 0.4);
  box-shadow: 10px 10px 20px -30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
  border: 1px solid rgba(255, 255, 255, 0.27);
  border-radius: 50%;

  object-fit: cover;
`;