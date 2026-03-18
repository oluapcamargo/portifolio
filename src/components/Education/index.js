import React, { useEffect, useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from './Card/EducationCard';
import EducationService from "../../services/education.service.js";


import {Container, Wrapper, Title, Desc, TimelineSection} from './EducationStyledComponent'

const Education = () => {

const [educationData, setEducation] = useState(null);
useEffect(() => {
    async function loadSkill() {
      const educationList = await EducationService.getAllEducation();
      setEducation(educationList); // pega o primeiro bio
    }
    loadSkill();
  }, []);

    if (!educationData) return null;

    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {educationData.map((education,index) => (
                            <TimelineItem  key={education.id}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                 <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary"></TimelineDot>
                                    {index !== educationData.length  && <TimelineConnector style={{ background: '#854CE6' }} ></TimelineConnector>}
                                    
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education