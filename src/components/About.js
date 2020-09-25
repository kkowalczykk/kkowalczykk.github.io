import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical'

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

const Content = styled.div`
      width: 100%;
      color: rgb(68,12,115);
`


const About = () => {
      return (
            <Wrapper>
                  <Header steps={['', 300, '<About/>', 1200]} />
                  <Content></Content>
            </Wrapper>
      );
}

export default About;