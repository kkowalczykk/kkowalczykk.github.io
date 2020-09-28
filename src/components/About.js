import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
`


const Content = styled.div`
      width: 100%;
      color: rgb(68,12,115);
`


const About = (props) => {

      useEffect(() => {
            props.updateTitle('About');
      })
      return (
            <Wrapper>
                  <Content></Content>
            </Wrapper>
      );
}

export default About;