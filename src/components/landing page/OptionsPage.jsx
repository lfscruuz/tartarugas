import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function OptionsPage(){
  return(
    <OptionsContainer>
      <Button to="/">projetos</Button>
      <Button to="/especies">especies</Button>
    </OptionsContainer>
  );
}

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  width: 80vw;
`;

const Button = styled(Link)`
  width: 10em;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  color: white;
  background-color: #525d6839;

  &:hover{
    color: black;
    background-color: white;
  }

  border: solid 1px;
  border-radius: 2em;
`;