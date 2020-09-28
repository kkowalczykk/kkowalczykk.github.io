import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Wrapper = styled.div`
      width: 100%;
      height: 40px;
      background-color: rgb(68,12,115);
      position: absolute;
      bottom: 0px;
      z-index: 0;
      display: flex;
      align-items: center;
`
const Copyright = styled.div`
      font-size: 0.8em;
      color: white;
      background-color: rgb(68,12,115);
`

const LogoContainer = styled.div`
      font-size: 1em;
      color: white;
      background-color: rgb(68,12,115);
`

const Footer = (props) => {
      const { pathname } = props.location
      return (
            <div>{pathname === '/' ? null : <Wrapper>
                  <Copyright>© Kowalczyk Karol, 2020</Copyright>
                  <LogoContainer>
                        <IconContext.Provider value={{ color: "white", className: "icon", backgroundColor: 'purple' }}>
                              <AiFillGithub></AiFillGithub>
                        </IconContext.Provider>
                  </LogoContainer>
            </Wrapper>}
            </div>

      );
}

export default Footer;