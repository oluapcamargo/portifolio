import React, { useEffect, useState } from "react";
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyledComponent';
import HeroImg from '../../images/HeroImage.png'
import BioService from "../../services/bio.service.js";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";
     

const Hero = () => {
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
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation>
                    </HeroBgAnimation>
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer><Title>Hi, I'm <br/>{bio.name}</Title>
                        <TextLoop>I am a <Span><Typewriter options={{strings: bio.roles, autoStart: true, loop:true }}></Typewriter> </Span></TextLoop>
                        <SubTitle>{bio.description}</SubTitle>
                        <ResumeButton href={bio.resume} target="_blank">Check Resume</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
} 


export default Hero;