import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function TurtleInfo({ turtle }) {
  
  return (
    <MapLayout>
      <SpeciesDistributionLayout src={turtle.distribution} alt={turtle.name} />
    </MapLayout>
  )
}

const MapLayout = styled.div`
  min-width: 100vw;
  background: rgb(109,233,249);
  background: linear-gradient(50deg, #1fb7cb 0%, rgba(122,251,231,1) 42%, rgba(255,211,211,1) 100%);  
  background-size: cover;
  background-attachment: fixed;
`;

const SpeciesDistributionLayout = styled.img`
  margin: 12.5% 0;
  width: 100%;
`;