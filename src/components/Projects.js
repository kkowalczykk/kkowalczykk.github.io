import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import ProjectBox from './ProjectBox';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
`

const Header = styled(Typical)`
      font-size: 1.9em;
      color: rgb(208, 0, 255);
      font-family: 'Nunito', sans-serif !important;
      padding-left: 10px;
      padding-right: 10px;
`
const Container = styled.div`
      width: 100%;
      max-width: 1920px;
      align-self: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
`



const Projects = () => {
      return (
            <Wrapper>
                  <Header steps={['', 300, '<Projects/>']} />
                  <Container>
                        <ProjectBox></ProjectBox>
                        <ProjectBox></ProjectBox>
                        <ProjectBox></ProjectBox>
                        <ProjectBox></ProjectBox>
                  </Container>
            </Wrapper>
      );
}

export default Projects;