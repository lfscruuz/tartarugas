import { Link } from 'react-router-dom';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { styled } from 'styled-components';
import ScrollToTop from '../ScrollToTop';

export default function OptionsPage(){

  const handleClick = (e) =>{
    e.preventDefault()
    // scrollToTop('smooth');
    console.log('babalba');
  }
  return(
    <OptionsContainer>
      <Button to="/projetos">projetos</Button>
      <Button to="/especies">especies</Button>
      <ScrollToTop/>
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