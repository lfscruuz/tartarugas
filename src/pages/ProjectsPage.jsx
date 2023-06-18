import { styled } from 'styled-components';
import Map from '../components/projects page/Map';

export default function Projetos() {
  return (
    <ProjectsPageContainer>
      <Map/>
    </ProjectsPageContainer>
  )
}

const ProjectsPageContainer = styled.div`
  background: rgb(109,233,249);
  background: linear-gradient(225deg, #1fb7cb 0%, rgba(122,251,231,1) 42%, rgba(255,211,211,1) 100%);  
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;