import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical'

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
`

const Header = styled(Typical)`
      font-size: 1.9em;
      color: rgb(208, 0, 255);
      font-family: 'Nunito', sans-serif !important;
      padding-left: 10px;
      padding-right: 10px;
`

const Skills = () => {
      return (
            <Wrapper>
                  <Header steps={['', 300, '<Skills/>', 1200]} />

            </Wrapper>
      );
}

export default Skills;