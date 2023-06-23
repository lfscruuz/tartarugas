import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { styled } from 'styled-components'

export default function MoreInfo() {
  return (
    <InfoContainer id='info'>
      <Fonts>
        <h3>Fontes</h3>
        <a href="https://www.conservation-careers.com/top-sea-turtle-conservation-internships-and-volunteer-opportunities/">Conservation Careers</a>
        <a href="https://seamap.env.duke.edu/swot">The State of the World Sea Turtles</a>
        <a href="https://www.tamar.org.br/">Projeto Tamar</a>
        <a href="https://www.worldwildlife.org/species/sea-turtle">WWF</a>
      </Fonts>
      <SocialMediaSection>
        <h3>Encontre-me</h3>
        <SocialMediaItem>
          <AiFillGithub/>
          <a href="https://github.com/lfscruuz">/lfscruuz</a>
        </SocialMediaItem>
        <SocialMediaItem>
          <AiFillLinkedin/>
          <a href="https://www.linkedin.com/in/lfscruuz/">/in/lfscruuz</a>
        </SocialMediaItem>
        <SocialMediaItem>
          <AiOutlineMail/>
          <p>lfscruz@outlook.com</p>
        </SocialMediaItem>
      </SocialMediaSection>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
width: 100%;
height: 40vh;

display: flex;
align-items: center;
justify-content: space-around;

background-color: skyblue;
`;

const Fonts = styled.div`
  width: 50%;
  height:80%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-right: solid 1px black;

  >a{
    text-decoration: none;
    color: black;
  }
  `;

const SocialMediaSection = styled.div`
  height:80%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  `;

const SocialMediaItem = styled.div`
  display: flex;
  align-items: center;
  >a{
    text-decoration: none;
    color: black;
  }
`;