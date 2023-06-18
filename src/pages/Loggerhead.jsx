import { styled } from 'styled-components'
import Continents from '/map/continents.svg';
import LoggerHeadMap from '/map/loggerhead.svg'

export default function Loggerhead() {
  return (
    <MapLayout>
      <SpeciesDistributionLayout src={LoggerHeadMap} />
    </MapLayout>
  )
}

const MapLayout = styled.div`
  min-width: 100vw;
  height: 100vh;

`;

const SpeciesDistributionLayout = styled.img`
  min-height: 100%;
  width: 100%;
`;