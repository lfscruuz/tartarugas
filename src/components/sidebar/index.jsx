import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import SpeciesListing from './SpeciesListing';

export default function Sidebar() {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const navigate = useNavigate();

  function handleMouseEnter() {
    setVisibleSidebar(true);
  }

  function handleMouseLeave() {
    setVisibleSidebar(false);
  }

  function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleClickLogo() {
    scrollToTop();
    navigate("/");
  }

  function handleClickInfo(){
    const element = document.getElementById("info");
    element?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <SidebarContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      visibleSidebar={visibleSidebar}
    >
      <LogoOption>
        <img src="/turtles/turtle-icon.svg" alt="turtle-icon" onClick={handleClickLogo} />
      </LogoOption>
      <LinkOption to='/especies' onClick={scrollToTop}>
        <p>Espécies</p>
      </LinkOption>
      <LinkOption onClick={handleClickInfo}>
        <p>Fontes</p>
      </LinkOption>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  height: 5rem;
  width: 90vh;
  padding: 1rem;
  z-index: 1;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
  
  position: fixed;
  left: 23%;
  top: ${({ visibleSidebar }) => visibleSidebar ? '0' : '-6rem'};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 17.5px 30px 30px -30px rgba(0, 0, 0, 0.215);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
  border: 1px solid rgba(255, 255, 255, 0.27);

  transition: all 0.5s ease-in-out;

  `;

const LogoOption = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  :hover{
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  >img{
    width: 7rem;
  }
  
  `;

const LinkOption = styled(Link)`
  :hover{
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }

  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  `;