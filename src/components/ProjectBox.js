import React from 'react';
import styled from 'styled-components';
import todoimg from '../media/todo.jpg';

const Box = styled.div`
      width: 81vw;
      min-height: 54vw;
      background-color: white;
      box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.35);
      margin: 10px 10px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;

      &:hover{
            .mask{
                  visibility: visible;;
                  transform: translate(0, -100%);
            }
      }

      @media screen and (min-width: 768px){
            width: 60vw;
            min-height: 40vw;
      }
      @media screen and (min-width: 1024px){
            width: 420px;
            min-height: 280px;
      }
      @media screen and (min-width: 1240px){
            width: 500px;
            min-height: 333px;
      }
      @media screen and (min-width: 1480px){
            width: 700px;
            min-height: 467px;
      }
`
const Mask = styled.div`
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: -100%;
      background-color: rgba(208, 0, 255, 0.33);
      visibility: hidden;
      transition: 0.3s;
`


const Title = styled.h2`
      text-align: center;
      font-size: 1.0em;
      color: rgb(68 12 115);
      background: none;
      position: relative;
      &::after{
            content: '';
            width: 80%;
            height: 3px;
            background-color: rgb(208, 0, 255);
            position: absolute;
            bottom: -10px;
            left: 10%;
            
      }
`

const ImageContainer = styled.div`
      width: 90%;
      align-self: center;
`
const Image = styled.img`
      width: 100%;
      height: auto;
`
const ProjectBox = () => {
      return (
            <Box>
                  <Title>User Authorization System</Title>
                  <ImageContainer>
                        <Image src={todoimg} />
                  </ImageContainer>
                  <Mask className='mask'></Mask>
            </Box>
      );
}

export default ProjectBox
      ;