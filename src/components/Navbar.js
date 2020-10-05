import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const Wrapper = styled.div`
      display: flex;
      justify-content: flex-end;
      position: fixed;
      top: 0;
      background-color: white;
      left: 0;
      width: 100vw;
      height: 55px;
      z-index: 5;
      box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.35);
      transition: height 0.4s;
      
      &.active{
            @media screen and (max-width: 850px){
                  height: 40vh;
            }

            @media screen and (max-height: 480px){
                  height: 70vh;
            }
      }
      
`
const Burger = styled.div`
      position: fixed;
      top: 17px;
      right: 17px;
      width: 30px;
      height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
       .line {
                  transition: ease-in-out 0.3s;
            }
      &.active{
           
            .mid{
                  opacity: 0;
            }
            .top{
                  transform: translate(0,8.5px) rotate(45deg);
            }
            .bot{
                  transform: translate(0,-8.5px) rotate(-45deg);
            }
      }

      @media screen and (min-width: 850px){
            display: none;
      }
`

const BurgerLine = styled.div`
      width: 100%;
      height: 3px;
      background-color: rgb(68,12,115);
`
const NavLinks = styled.div`
      width: 100%;
      flex-direction: column;
      justify-content: space-around;
      display: flex;
      transform: translate(0,-100vh);
      transition: ease-in-out 0.4s;
      background-color: white;
      &.active{
            transform: translate(0,0);
      }

      @media screen and (min-width: 850px){
      height: 55px;
      max-height: 55px;
      width:auto;
      padding-right: 30px;
      flex-direction: row;
      justify-content: flex-end;
      transform: translate(0,0);
}
      
`


const Link = styled(NavLink)`
display: flex;
justify-content: center;
align-self: center;
font-size: 1.1em;
text-decoration: none;
color: rgb(68,12,115);
margin: 5px 10px;
transition: color 0.4s;
background-color: white;
z-index: 5;

@media screen and (min-width: 850px){
      height: 100%;
      align-items: center;
}
position: relative;
&:hover{
      color: rgb(165, 3, 252);

      &::after{
            visibility: visible;
            transform: scaleX(1);
      }
}
&.active{
      color: rgb(165, 3, 252);
      &::after{
            visibility: visible;
            transform: scaleX(1);
      }
}

&::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: rgb(165, 3, 252);
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;  
}
`

const Navbar = () => {

      const [navStatus, setStatus] = useState(false);

      const wrapper = useRef(null);

      useEffect(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.in' } });
            const element = wrapper.current;
            tl.from(element, { y: '-100', duration: '1.5' });
            const outNav = document.querySelector('section');
            outNav.addEventListener('click', () => {
                  setStatus(false);
            })
      }, []);

      let handleStatus = () => {
            setStatus(!navStatus);
      }


      return (
            <Wrapper ref={wrapper} className={navStatus ? 'active' : null} >
                  <NavLinks className={navStatus ? 'active' : null}>
                        <Link onClick={handleStatus} to='/' exact>Home</Link>
                        <Link onClick={handleStatus} to='/about'>About</Link>
                        <Link onClick={handleStatus} to='/skills'>Skills</Link>
                        <Link onClick={handleStatus} to='/projects'>Projects</Link>
                        <Link onClick={handleStatus} to='/contact'>Contact</Link>
                  </NavLinks>
                  <Burger onClick={handleStatus} className={navStatus ? 'active' : null}>
                        <BurgerLine className="line top"></BurgerLine>
                        <BurgerLine className="line mid"></BurgerLine>
                        <BurgerLine className="line bot"></BurgerLine>
                  </Burger>
            </Wrapper >
      );
}

export default Navbar;