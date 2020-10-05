import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
`


const Content = styled.div`
      width: 100%;
      color: rgb(68,12,115);
`

const HighlightSection = styled.div`
      background: rgb(68,12,115);
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: space-around;
`

const ImageContainer = styled.div`
      display: flex;
      align-self: center;
      width:150px;
      min-width: 150px;
      border-radius: 50%;
      overflow:hidden;
`
const Image = styled.div`
      width: 100%;
      height: 150px;
`
const HighlightContent = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: none;
`
const HighlifhtInfo = styled.p`
      background: none;
      color: white;
`

const About = (props) => {

      useEffect(() => {
            props.updateTitle('About');
      })
      return (
            <Wrapper>
                  <Content>
                        <HighlightSection>
                              <ImageContainer>
                                    <Image></Image>
                              </ImageContainer>
                              <HighlightContent>
                                    <HighlifhtInfo>Location</HighlifhtInfo>
                                    <HighlifhtInfo>Name</HighlifhtInfo>
                                    <HighlifhtInfo>Age</HighlifhtInfo>
                              </HighlightContent>
                        </HighlightSection>
                  </Content>
            </Wrapper>
      );
}

export default About;