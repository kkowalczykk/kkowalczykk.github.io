import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox';
import todoimg from '../media/projects/todo.jpg';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
`

const Container = styled.div`
      width: 100%;
      max-width: 1920px;
      align-self: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
`



const Projects = (props) => {
      useEffect(() => {
            props.updateTitle('Projects');

      })
      const projectList = [
            {
                  name: 'Mock Data Generator',
                  description: 'It is an application that generate customized random data as JSON Object. Created with Angular, faker.js and Bootsrap.',
                  linkRepo: 'https://github.kkowalczykk.com',
                  linkLive: 'https://github.kkowalczykk.com',
                  technologies: ['Angular', 'Bootstrap', 'Faker.js'],
                  img: todoimg,
            },
            {
                  name: 'COVID-19 Tracker',
                  description: 'It is an application that tracks world COVID-19 infections statistic. Data comes from covid19-api and mathdro-covid-api Created with Angular, Bootstrap.',
                  linkRepo: 'https://github.com/kkowalczykk/covid-tracker',
                  linkLive: 'https://kkowalczykk.github.io/covid-tracker/world',
                  technologies: ['Angular', 'Bootstrap', 'Charts.js'],
                  img: todoimg,
            },
      ]

      return (
            <Wrapper>
                  <Container>
                        {projectList.map((project, index) =>
                              <ProjectBox key={index} name={project.name} description={project.description} linkRepo={project.linkRepo}
                                    linkLive={project.linkLive} technologies={project.technologies} img={project.img}></ProjectBox>
                        )}
                  </Container>
            </Wrapper>
      );
}

export default Projects;