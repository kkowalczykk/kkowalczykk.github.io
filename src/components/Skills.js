import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import reactimg from '../media/skills/react.png';
import nodeimg from '../media/skills/nodejs.png';
import gsap from 'gsap';

const Wrapper = styled.div`
      width: 100%;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      padding-bottom: 100px;
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
            width: 55%;
      }
      @media screen and (min-width: 1480px){
            width: 45%;
      }
`

const SkillContainer = styled.div`
      width: 90%;
      min-height: 70px;
      margin: 10px 0;
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
            width: 80%;
           
      }
      @media screen and (min-width: 1480px){
            width: 80%;
      }
`

const ImageContainer = styled.div`
      width:60px;
      min-width: 60px;
      
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
                        tl.fromTo(item, { opacity: '0', scaleX: '0.5' }, { duration: '0.4', scaleX: '1', opacity: '1' });
                  }
                  else {
                        gsap.set(item, { transformOrigin: '0% 50%' });
                        tl.fromTo(item, { opacity: '0', scaleX: '0.5' }, { duration: '0.4', scaleX: '1', opacity: '1' });
                  }
            })
      }, [])

      const test = ['essa', 'test', 'fsfa', 'asfsa', 'ss']
      return (
            <Wrapper>
                  <SkillsWrapper ref={container}>
                        {test.map((el, id) => //el - element of array
                              <SkillContainer key={id} className={(id % 2 === 0) ? 'left' : 'right'}>
                                    <ImageContainer>
                                          <Image src={reactimg}></Image>
                                    </ImageContainer>
                                    <SkillContent className={(id % 2 === 0) ? 'left' : 'right'}>
                                          <SkillTitle>React</SkillTitle>
                                          <SkillDivider></SkillDivider>
                                          <SkillText className={(id % 2 === 0) ? 'left' : 'right'}>
                                                Using React to build User Interface. Rad sbahf bkhfa jksab asjfjka
                                          </SkillText>
                                    </SkillContent>
                              </SkillContainer>
                        )}
                  </SkillsWrapper>
            </Wrapper >

      );
}

export default Skills;