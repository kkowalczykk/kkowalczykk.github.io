import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import figma from '../media/skills/figma.png';
import angular from '../media/skills/angular.png';
import express from '../media/skills/express.png';
import git from '../media/skills/git.png';
import html from '../media/skills/html.png';
import js from '../media/skills/js.png';
import mongodb from '../media/skills/mongodb.png';
import nodejs from '../media/skills/nodejs.png';
import photoshop from '../media/skills/photoshop.png';
import react from '../media/skills/react.png';
import sass from '../media/skills/sass.png';
import styledimg from '../media/skills/styled.png';
import vscode from '../media/skills/vscode.png';
import bootstrap from '../media/skills/bootstrap.png';

const Wrapper = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
`

const SkillsWrapper = styled.div`
      align-self: center;
      width: 90%;
      display: flex;
      flex-direction: column;
      @media screen and (min-width: 480px){
            width: 70%;
      }
      @media screen and (min-width: 768px){
            width: 60%;
      }
      @media screen and (min-width: 1024px){
            width: 60%; 
      }
      @media screen and (min-width: 1240px){
            width: 90%;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
      }
`

const SkillContainer = styled.div`
      width: 90%;
      min-height: 70px;
      margin: 15px 10px;
      background-color: white;
      box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.35);
      border-radius: 5px;
      padding: 0 5px;
      &.left{
            align-self: flex-start;
            display: flex;
            justify-content: center;
      }

      &.right{
            align-self: flex-end;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
      }

      @media screen and (min-width: 768px){
            width: 80%;
            
      }
      @media screen and (min-width: 1024px){
            width: 80%;
            min-height: 80px;
      }
      @media screen and (min-width: 1240px){
            width: 40%;
            margin: 20px 15px;
      }
      
`

const ImageContainer = styled.div`
      width:60px;
      min-width: 60px;
      padding: 4px;
      background-color: white;
      display: flex;
      align-self: center;
      margin-right: 10px;
      @media screen and (min-width: 1024px){
            width: 70px; 
            min-width: 70px; 
      }
`
const Image = styled.img`
      width: 100%;
      height: auto;
      background-color: white;
`

const SkillContent = styled.div`
      height: 100%;
      width: 100%;
      background: none;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      &.left{
            align-items: flex-start;
      }
      &.right{
            align-items: flex-end;
      }
`
const SkillTitle = styled.h1`
      font-size: 1.1em;
      color: purple;
      background: none;
      margin-block-start: 0.4em;
      margin-block-end: 0.4em;
      @media screen and (min-width: 1024px){
            font-size: 1.2em;
      }
`
const SkillDivider = styled.div`
      width: 90%;
      min-height: 2px;
      background-color: purple;
`
const SkillText = styled.p`
      background: none;
      font-size: 0.8em;
      width: 80%;
      &.left{
            text-align: left;
      }
      &.right{
            text-align: right;
      }
      @media screen and (min-width: 1024px){
            font-size: 0.9em;
      }
`

const Skills = (props) => {
      const container = useRef(null);

      useEffect(() => {
            props.updateTitle('Skills');

            const tl = gsap.timeline({ defaults: { ease: 'slowMo.in' } });
            // Animations
            const elements = Array.from(container.current.children);
            elements.map((item, id) => {
                  //gsap.set(item, { transformOrigin: '50% 100%' });
                  if (item.className.includes('left')) {
                        gsap.set(item, { transformOrigin: '100% 50%' });
                        tl.fromTo(item, { opacity: '0', scaleX: '0.5' }, { duration: '0.7', scaleX: '1', opacity: '1' }, id * 0.2);
                  }
                  else {
                        gsap.set(item, { transformOrigin: '0% 50%' });
                        tl.fromTo(item, { opacity: '0', scaleX: '0.5' }, { duration: '0.7', scaleX: '1', opacity: '1' }, id * 0.2);
                  }
            })
      }, [])

      const test = [
            {
                  title: 'HTML',
                  desc: 'Writing semantic html 🤓',
                  img: html
            },
            {
                  title: 'JavaScript',
                  desc: 'Using JS ES6+ 👌',
                  img: js
            },
            {
                  title: 'Sass',
                  desc: 'Using Sass for styling 🎨',
                  img: sass
            },
            {
                  title: 'React',
                  desc: 'Creating frontend with React (prefer hooks) ⚛',
                  img: react
            },
            {
                  title: 'Angular',
                  desc: 'Creating frontend with Angular 🅰',
                  img: angular
            },
            {
                  title: 'NodeJS',
                  desc: 'Basic knowledge of creating backend with nodeJS',
                  img: nodejs
            },
            {
                  title: 'Express',
                  desc: 'Basic knowledge of express framework',
                  img: express
            },
            {
                  title: 'MongoDB',
                  desc: 'Storing data with MongoDB',
                  img: mongodb,
            },
            {
                  title: 'Styled-Components',
                  desc: 'Styling React components with styled-components 💅',
                  img: styledimg
            },
            {
                  title: 'Bootstrap',
                  desc: 'Basics of bootstrap library',
                  img: bootstrap,
            },
            {
                  title: 'Visual Studio Code',
                  desc: 'Using vscode for coding 😊',
                  img: vscode
            },
            {
                  title: 'Figma',
                  desc: 'Basic knowledge of designing in Figma 👨‍🎨',
                  img: figma
            },
            {
                  title: 'GIT',
                  desc: 'Using GIT for controlling code version 👨‍💻',
                  img: git
            },
            {
                  title: 'Photoshop',
                  desc: 'Basisc of editing raster graphics in photoshop',
                  img: photoshop
            },
      ]
      return (
            <Wrapper>
                  <SkillsWrapper ref={container}>
                        {test.map((el, id) => //el - element of array
                              <SkillContainer key={id} className={(id % 2 === 0) ? 'left' : 'right'}>
                                    <ImageContainer>
                                          <Image src={el.img}></Image>
                                    </ImageContainer>
                                    <SkillContent className={(id % 2 === 0) ? 'left' : 'right'}>
                                          <SkillTitle>{el.title}</SkillTitle>
                                          <SkillDivider></SkillDivider>
                                          <SkillText className={(id % 2 === 0) ? 'left' : 'right'}>
                                                <span>{el.desc}</span>
                                          </SkillText>
                                    </SkillContent>
                              </SkillContainer>
                        )}
                  </SkillsWrapper>
            </Wrapper >

      );
}

export default Skills;