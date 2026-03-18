import React ,{ useEffect, useState }from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu,  MobileLink, LinkedinButton } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import BioService from "../../services/bio.service.js";
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme()
    const [bio, setBio] = useState(null);
useEffect(() => {
    async function loadBio() {
      const bios = await BioService.getAllBio();
      setBio(bios[0]); // pega o primeiro bio
    }

    loadBio();
  }, []);

    if (!bio) return null;

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
        <Link to='/' style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20, cursor: 'pointer' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </Link>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => { setIsOpen(!isOpen);}}>
          </FaBars>
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={bio.github} target="_blank">Github Profile</GitHubButton>
          <LinkedinButton href={bio.linkedin} target="_blank">Linkedin Profile</LinkedinButton>
        </ButtonContainer>
      </NavbarContainer>
      {
        isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={bio.github} target="_blank">Github Profile</GitHubButton>
            <LinkedinButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={bio.linkedin} target="_blank">Linkedin Profile</LinkedinButton>
          </MobileMenu>
        )
      }
    </Nav>
  )
}

export default Navbar;