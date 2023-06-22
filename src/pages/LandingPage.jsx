import { styled } from 'styled-components'
import TitlePage from '../components/landing page/TitlePage';
import OptionsPage from '../components/landing page/OptionsPage';
import MoreInfo from '../components/landing page/MoreInfo';

export default function LandingPage() {
  return (
    <MainContainer>
      <TitlePage/>
      <OptionsPage/>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* height: 100vh; */
  width: 100vw;

  background-image: url("https://i.redd.it/3shtesuvaws41.jpg");
  background-size: cover;
  background-attachment: fixed;
`;

