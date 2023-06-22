import { styled } from 'styled-components';

export default function TitlePage() {
  return (
    <TitleContainer>
      <Title>DIA INTERNACIONAL DA TARTARUGA MARINHA</Title>
    </TitleContainer>
  )
}

const Title = styled.text`
  font-size: 10em;
  font-weight: 800;
  color: transparent;

  background-clip: text;
  background-image: url("https://i.redd.it/3shtesuvaws41.jpg");
  background-size: cover;
  background-attachment: fixed;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
  position: relative;

  background-color: skyblue;
`;