import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillFacebook, AiOutlineMail } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Wrapper = styled.div`
      width: 100%;
      height: 35px;
      background-color: rgb(68,12,115);
      position: absolute;
      bottom: 0px;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
`
const Copyright = styled.div`
      font-size: 0.8em;
      color: white;
      background-color: rgb(68,12,115);
      margin-left: 20px;
`

const LogoContainer = styled.div`
      font-size: 1.5em;
      color: white;
      background-color: rgb(68,12,115);
      display:flex;
      justify-content: space-around;
      margin-right: 20px;
`
const Link = styled.a`
      background: none;
`


const Footer = (props) => {
      const { pathname } = props.location
      return (
            <div>{pathname === '/' ? null : <Wrapper>
                  <Copyright>© Kowalczyk Karol, 2020</Copyright>
                  <LogoContainer>
                        <IconContext.Provider value={{ color: "white", className: "icon", style: { background: 'none', margin: '0px 10px', cursor: 'pointer' } }}>
                              <Link href="https://github.com/kkowalczykk"><AiFillGithub></AiFillGithub></Link>
                              <Link href='https://www.facebook.com/karol.kowalczyk97'> <AiFillFacebook></AiFillFacebook></Link>
                              <Link href="mailto:kovalczyk97@gmail.com"><AiOutlineMail></AiOutlineMail></Link>
                        </IconContext.Provider>
                  </LogoContainer>
            </Wrapper>}
            </div>

      );
}

export default Footer;