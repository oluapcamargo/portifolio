import React, { useEffect, useState } from "react";
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillsStyledComponent'
import SkillsService from "../../services/skills.service.js";
const skillListGroups = ["Frontend","Backend","Cloud","Others"]
const SkillData = () => {
      const [skillsData, setSkill] = useState(null);
useEffect(() => {
    async function loadSkill() {
      const skillsList = await SkillsService.getAllSkills();
      setSkill(skillsList); // pega o primeiro bio
    }
    loadSkill();
  }, []);

    if (!skillsData) return null;
   
    return (  
      <Container id="skills">
        <Wrapper>
          <Title>Skills</Title>
          <Desc>Here are some of my skills on which I have been working on for the past 5 years.
          </Desc>
          <SkillsContainer>
              {skillListGroups.map((idSkill) => {
                const skill = skillsData[idSkill]

                return (
                  <Skill key={skill.id}>
                    <SkillTitle>{skill.title}</SkillTitle>

                    <SkillList>
                      {skill.skills.map((item) => (
                        <SkillItem key={item.id}>
                          <SkillImage src={item.image} />
                          {item.name}
                        </SkillItem>
                      ))}
                    </SkillList>
                  </Skill>
                )
              })}
            </SkillsContainer>
        </Wrapper>
      </Container>
    )
  }

  export default SkillData;