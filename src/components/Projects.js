import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox';
import todoimg from '../media/projects/todo.jpg';
import gsap from 'gsap';

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
      const container = useRef(null);

      useEffect(() => {
            props.updateTitle('Projects');
            const tl = gsap.timeline({ defaults: { ease: 'slowMo.in' } });
            // Animations
            const elements = Array.from(container.current.children);
            console.log(elements);
            elements.map((item, id) => {
                  gsap.set(item, { transformOrigin: '50% 100%' });
                  tl.fromTo(item, { x: '-100', opacity: '0', scale: '0.5' }, { duration: '0.4', x: '0', opacity: '1', scale: '1' });
            })




      }, []);


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
            {
                  name: 'Sorting Algorithms Visualizer',
                  description: 'It is an application that tracks world COVID-19 infections statistic. Data comes from covid19-api and mathdro-covid-api Created with Angular, Bootstrap.',
                  linkRepo: 'https://github.com/kkowalczykk/covid-tracker',
                  linkLive: 'https://kkowalczykk.github.io/covid-tracker/world',
                  technologies: ['React'],
                  img: todoimg,
            },
            {
                  name: 'User Authorization System',
                  description: 'It is an application that tracks world COVID-19 infections statistic. Data comes from covid19-api and mathdro-covid-api Created with Angular, Bootstrap.',
                  linkRepo: 'https://github.com/kkowalczykk/covid-tracker',
                  linkLive: 'https://kkowalczykk.github.io/covid-tracker/world',
                  technologies: ['NodeJS', 'Express', 'MongoDB', 'React', 'Styled Components'],
                  img: todoimg,
            },
            {
                  name: 'My portfolio',
                  description: 'It is an application that tracks world COVID-19 infections statistic. Data comes from covid19-api and mathdro-covid-api Created with Angular, Bootstrap.',
                  linkRepo: 'https://github.com/kkowalczykk/covid-tracker',
                  linkLive: 'https://kkowalczykk.github.io/covid-tracker/world',
                  technologies: ['React', 'Styled Components', 'GSAP'],
                  img: todoimg,
            },
      ]

      return (
            <Wrapper >
                  <Container ref={container}>
                        {projectList.map((project, index) =>
                              <ProjectBox key={index} name={project.name} description={project.description} linkRepo={project.linkRepo}
                                    linkLive={project.linkLive} technologies={project.technologies} img={project.img}></ProjectBox>
                        )}
                  </Container>
            </Wrapper>
      );
}

export default Projects;