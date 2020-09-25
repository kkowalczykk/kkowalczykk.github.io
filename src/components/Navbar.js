import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
      display: flex;
      justify-content: flex-end;
      position: fixed;
      top: 0;
      background-color: white;
      left: 0;
      width: 100vw;
      height: 55px;
      z-index: 1;
      box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.35);
      
`

const NavLinks = styled.div`
      height: 100%;
      padding-right: 30px;
      display: flex;
      justify-content: flex-end;
      background-color: white;
`


const Link = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-size: 1.1em;
text-decoration: none;
color: rgb(61, 130, 204);
margin: 0 10px;
transition: 0.4s;
color: rgb(230, 143, 252);
background-color: white;
&:hover{
      color: rgb(208, 0, 255);
      border-bottom: 3px solid rgb(208, 0, 255);
}
&.active{
      color: rgb(208, 0, 255);
      border-bottom: 3px solid rgb(208, 0, 255);
}

`

const Navbar = () => {
      return (
            <Wrapper>
                  <NavLinks>
                        <Link to='/' exact>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/skills'>Skills</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contact'>Contact</Link>
                  </NavLinks>
            </Wrapper>
      );
}

export default Navbar;