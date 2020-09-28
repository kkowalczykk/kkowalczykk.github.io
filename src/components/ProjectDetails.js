import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
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
      width: 140px;
      height: 40px;
      background-color: white;
      text-decoration: none;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      color: black;
      align-self: center;
      border-radius: 20px;
      border: 3px solid black;
      margin: 20px 5px;
      &:hover{
            background-color: rgb(142, 18, 199);
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

const ProjectDetails = (props) => {
      let { description, img, linkLive, linkRepo, name, technologies } = props.location.state.properties;
      useEffect(() => {
            props.updateTitle(name);
      })
      return (
            <Wrapper>
                  <ImageContainer>
                        <Image src={img}></Image>
                  </ImageContainer>
                  <Desc>{description}</Desc>
                  <BoxCenter>
                        <LinkButton href={linkRepo} target="_blank">Repository</LinkButton>
                        <LinkButton href={linkLive} target="_blank">Check Live</LinkButton>
                  </BoxCenter>
                  <BoxLeft>
                        {technologies.map((tech, id) =>
                              <TechBox key={id}>{tech}</TechBox>
                        )}
                  </BoxLeft>
            </Wrapper>
      );
}

export default ProjectDetails;