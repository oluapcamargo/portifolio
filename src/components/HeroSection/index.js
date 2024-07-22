import React from "react";
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyledComponent';
import HeroImg from '../../images/HeroImage.png'
import {Bio} from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation>
                    </HeroBgAnimation>
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer><Title>Hi, I'm <br/>{Bio.name}</Title>
                        <TextLoop>I am a <Span><Typewriter options={{strings: Bio.roles, autoStart: true, loop:true }}></Typewriter> </Span></TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="_blank">Check Resume</ResumeButton>
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