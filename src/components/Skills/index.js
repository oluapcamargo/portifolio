import React from 'react';
import { skills } from '../../data/constants';
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillsStyledComponent'


const Skills = () => {
    return (
      <Container id="skills">
        <Wrapper>
          <Title>Skills</Title>
          <Desc>Here are some of my skills on which I have been working on for the past 5 years.
          </Desc>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill key={skill.id}>
                <SkillTitle >{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.id}>
                      <SkillImage  src={item.image}/>
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
            </SkillsContainer>
        </Wrapper>
      </Container>
    )
  }
  
  export default Skills