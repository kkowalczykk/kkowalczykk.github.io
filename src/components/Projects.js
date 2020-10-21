import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox';
import todoimg from '../media/projects/todo.jpg';
import covidimg from '../media/projects/covid.jpg';
import chatimg from '../media/projects/chat.jpg';
import carappimg from '../media/projects/car_app.jpg';
import portfolioimg from '../media/projects/portfolio.jpg';
import sortingimg from '../media/projects/sorting.jpg';
import userauthimg from '../media/projects/user_auth.jpg';
import gsap from 'gsap';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
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
                  tl.fromTo(item, { x: '-100', opacity: '0', scale: '0.5' }, { duration: '0.5', x: '0', opacity: '1', scale: '1' }, id * 0.2);
            })




      }, []);


      const projectList = [
            {
                  name: 'Chatting App',
                  description: 'App that allows to chat with people. Created with NodeJS, Socket.io, React.',
                  linkRepo: 'https://github.com/kkowalczykk/chatting-app-client',
                  linkRepoBack: 'https://github.com/kkowalczykk/chatting-app-server',
                  linkLive: 'https://chatting-app-front.netlify.app/',
                  technologies: ['Angular', 'Bootstrap', 'Faker.js'],
                  img: chatimg,
            },
            {
                  name: 'Mock Data Generator',
                  description: 'It is an application that generate customized random data as JSON Object. Created with Angular, faker.js and Bootsrap.',
                  linkRepo: 'https://github.com/kkowalczykk/mock-data-generator',
                  linkLive: '#',
                  technologies: ['Angular', 'Bootstrap', 'Faker.js'],
                  img: todoimg,
            },
            {
                  name: 'COVID-19 Tracker',
                  description: 'It is an application that tracks world COVID-19 infections statistic. Data comes from covid19-api and mathdro-covid-api Created with Angular, Bootstrap.',
                  linkRepo: 'https://github.com/kkowalczykk/covid-tracker',
                  linkLive: 'https://kkowalczykk.github.io/covid-tracker/world',
                  technologies: ['Angular', 'Bootstrap', 'Charts.js'],
                  img: covidimg,
            },
            {
                  name: 'Sorting Algorithms Visualizer',
                  description: 'It is an application that tracks world COVID-19 infections statistic. Data comes from covid19-api and mathdro-covid-api Created with Angular, Bootstrap.',
                  linkRepo: 'https://github.com/kkowalczykk/Sorting-Visualizer',
                  linkLive: 'https://kkowalczykk.github.io/Sorting-Visualizer/',
                  technologies: ['React'],
                  img: sortingimg,
            },
            {
                  name: 'User Authorization System',
                  description: 'It is an application that tracks world COVID-19 infections statistic. Data comes from covid19-api and mathdro-covid-api Created with Angular, Bootstrap.',
                  linkRepo: 'https://github.com/kkowalczykk/covid-tracker',
                  linkRepoBack: 'https://github.com/kkowalczykk/carApp-angular',
                  linkLive: 'https://kkowalczykk.github.io/covid-tracker/world',
                  technologies: ['NodeJS', 'Express', 'MongoDB', 'React', 'Styled Components'],
                  img: userauthimg,
            },
            {
                  name: 'My portfolio',
                  description: 'My personal portfolio website which you are currently looking at. Created with React.',
                  linkRepo: 'https://github.com/kkowalczykk/kkowalczykk.github.io',
                  linkLive: '#',
                  technologies: ['React', 'Styled Components', 'GSAP'],
                  img: portfolioimg,
            },
            {
                  name: 'Car Manager App',
                  description: 'Application is a simple CRUD API created with Java(Spring) integrated with Angular Frontend. Data are stored in Heroku PosgreSQL database.',
                  linkRepo: 'https://github.com/kkowalczykk/carApp-angular',
                  linkRepoBack: 'https://github.com/kkowalczykk/carApp-crud-api',
                  linkLive: 'https://kkowalczykk.github.io/carApp-angular/',
                  technologies: ['Java', 'Spring', 'Angular', 'Bootstrap'],
                  img: carappimg,
            },
      ]

      return (
            <Wrapper >
                  <Container ref={container}>
                        {projectList.map((project, index) =>
                              <ProjectBox key={index} name={project.name} description={project.description} linkRepo={project.linkRepo}
                                    linkRepoBack={project.linkRepoBack} linkLive={project.linkLive} technologies={project.technologies} img={project.img}></ProjectBox>
                        )}
                  </Container>
            </Wrapper>
      );
}

export default Projects;