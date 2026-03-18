import React, { useEffect, useState } from "react";
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyledComponent'
import ProjectCard from './Card/ProjectCards'
import ProjectService from "../../services/project.service.js";


const Projects = ({openModal,setOpenModal}) => {

  const [toggle, setToggle] = useState('all');
  const [projectsData, setprojects] = useState(null);

  useEffect(() => {
    async function loadSkill() {
      const projectsList = await ProjectService.getAllProject();
      setprojects(projectsList); 
    }
    loadSkill();
  }, []);

    if (!projectsData) return null;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend' ?
            <ToggleButton active value="frontend" onClick={() => setToggle('frontend')}>Frontend</ToggleButton>
            :
            <ToggleButton value="frontend" onClick={() => setToggle('frontend')}>Frontend</ToggleButton>
          }
          <Divider />
          {toggle === 'backend' ?
            <ToggleButton active value="backend" onClick={() => setToggle('backend')}>Backend</ToggleButton>
            :
            <ToggleButton value="backend" onClick={() => setToggle('backend')}>Backend</ToggleButton>
          }
            <Divider />
          {toggle === 'fullstack' ?
            <ToggleButton active value="fullstack" onClick={() => setToggle('fullstack')}>Full Stack</ToggleButton>
            :
            <ToggleButton value="fullstack" onClick={() => setToggle('fullstack')}>Full Stack</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projectsData
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projectsData
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects