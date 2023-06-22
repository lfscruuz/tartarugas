import { styled } from 'styled-components';
import { turtles } from '../../../api/database/turtles';

export default function SpeciesListing() {
  
  console.log(turtles);

  return (
    <Listing>
      {turtles.map((turtle) => {
        console.log(turtle)
        return (
          <img src={turtle.svg_icon} alt={turtle.portuguese_name} />
        )
      })}
    </Listing>
  )
}

const Listing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  >img{
    width: 5rem;
    :hover{
      transform: scale(1.5)
    }
  }
  `;

const TurtleOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;