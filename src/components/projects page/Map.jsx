import { styled } from 'styled-components';
import Continents from '/map/continents.svg';

export default function Map() {
  return (
    <MapContainer>
      <img src={Continents}/>
    </MapContainer>
  )
}

const MapContainer = styled.div`
  width: 100vw;
  max-height: 100vh;

  >img {
    width: 100vw;
    max-height: 100vh;
  }
`;