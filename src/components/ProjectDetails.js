import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';


const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
`

const ImageContainer = styled.div`
      width: 90%;
      max-width: 800px;
      align-self: center;
`
const Image = styled.img`
      width: 100%;
      height: auto;
`
const Desc = styled.p`
      margin: 30px 5%;
      font-size: 1em;
      text-align: justify;
      color: rgb(68,12,115);
`

const LinkButton = styled.a`
      display: flex;
      font-size: 0.9em;
      min-width: 100px;
      min-height: 30px;
      background-color: white;
      text-decoration: none;
      align-items: center;
      justify-content: center;
      color: black;
      align-self: center;
      border-radius: 20px;
      border: 2px solid black;
      margin: 20px 5px;
      padding: 0 5px;
      overflow: hidden;
      position: relative;
      &:hover {
      background: transparent;
      box-shadow: 0 0 10px 7px rgba(139, 16, 173, 0.5);

            &::before {
                  transform: translateX(100%);
            }
      }
      &::before {
                  position: absolute;
                  content: "";
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                        120deg,
                        transparent,
                        rgb(139, 16, 173),
                        transparent
                  );
                  transform: translateX(-100%);
                  transition: 0.5s;
            }
      @media screen and (min-width: 768px){
            font-size: 1em;
            min-width: 130px;
            min-height: 40px;
      }
`

const BoxCenter = styled.div`
      width: 90%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-self: center;
      margin: 10px 0;
`

const BoxLeft = styled.div`
      width: 90%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-self: center;
      margin: 10px 0;
`

const TechBox = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8em;
      height: 20px;
      background-color: rgb(88, 8, 110);
      color: white;
      padding: 3px 10px;
      margin: 5px 10px;
`

const BackButton = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 30px;
      margin-bottom: 20px;
      margin-left: 30px;
      background-color: rgb(100, 5, 130);
      color: white;
      cursor:pointer;
      transition: all ease-in-out 0.3s;
      &:hover{
            background-color: rgb(120, 5, 160);
      }
`

const ProjectDetails = (props) => {
      let { description, img, linkLive, linkRepo, linkRepoBack, name, technologies } = props.location.state.properties;
      let history = useHistory();
      const imgElement = useRef(null);
      const descElement = useRef(null);
      const btnElement = useRef(null);
      const techElement = useRef(null);


      useEffect(() => {
            props.updateTitle(name);
            const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
            tl.fromTo(imgElement.current, { opacity: '0', y: '-50', }, { opacity: '1', y: '0', duration: '0.5' });
            tl.fromTo(descElement.current, { opacity: '0', y: '-50', }, { opacity: '1', y: '0', duration: '0.5' });
            tl.fromTo(btnElement.current, { opacity: '0', y: '-50', }, { opacity: '1', y: '0', duration: '0.5' });
            tl.fromTo(techElement.current, { opacity: '0', y: '-50', }, { opacity: '1', y: '0', duration: '0.5' });
      }, [])

      const goBack = () => {
            history.push('/projects');
      }

      return (
            <Wrapper>
                  <BackButton onClick={goBack}>Go back</BackButton>
                  <ImageContainer ref={imgElement}>
                        <Image src={img}></Image>
                  </ImageContainer>
                  <Desc ref={descElement}>{description}</Desc>
                  <BoxCenter ref={btnElement}>
                        <LinkButton href={linkRepo} target="_blank">Repository</LinkButton>
                        {linkRepoBack ? <LinkButton href={linkRepoBack} target="_blank">Backend Repository</LinkButton> : null}
                        <LinkButton href={linkLive} target="_blank">Check Live</LinkButton>
                  </BoxCenter>
                  <BoxLeft ref={techElement}>
                        {technologies.map((tech, id) =>
                              <TechBox key={id}>{tech}</TechBox>
                        )}
                  </BoxLeft>
            </Wrapper>
      );
}

export default ProjectDetails;