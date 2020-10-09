import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as AboutScene } from '../media/about_me.svg';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
`
const Content = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 10px 0;
      @media screen and (min-width: 940px){
            justify-content: space-around;
      }
`

const Card = styled.div`
      width: 90%;
      max-width: 400px;
      height: 200px;
      background: white;
      border-radius: 15px;
      box-shadow: 0px 5px 5px 2px rgba(0,0,0,0.35);
      display: flex;
      align-items: center;
      margin: 10px 0;
      @media screen and (min-width: 1240px){
            max-width: 600px;  
      }
      .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background: none;
            width: calc(100% - 140px);

            @media screen and (min-width: 1240px){
                  width: calc(100% - 190px);
            }
            p{
                  display: flex;
                  width: 80%;
                  background-color: rgba(148, 56, 194,0.15);
                  height: 30px;
                  border-radius: 15px;
                  padding: 3px 5px;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.35);
                  font-size: 0.9em;
            }
      }
`

const AboutText = styled.div`
      width: 90%;
      p{
            text-align: justify;
            line-height:1.5em;
      }

      @media screen and (min-width: 940px){
            width: 50%;
      }
`

const ImgContainer = styled.div`
      width: 120px;
      height: 120px;
      background: none;
      overflow:hidden;
      margin: 10px 10px;
      @media screen and (min-width: 1240px){
            width: 170px;
            height: 170px; 
      }
`

const Image = styled.img`
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: purple;
      @media screen and (min-width: 1240px){
            width: 170px;
            height: 170px; 
      }
`
const SvgContainer = styled.div`
      width: 90%;
      @media screen and (min-width: 940px){
            width: 50%;
      }
      svg{
            width: 100%;
            height: auto;
      }
`



const About = (props) => {

      useEffect(() => {
            props.updateTitle('About');
      })
      return (
            <Wrapper>
                  <Content>
                        <Card>
                              <ImgContainer>
                                    <Image></Image>
                              </ImgContainer>
                              <div className="content">
                                    <p className="infoBox">👱‍♂️ Karol Kowalczyk</p>
                                    <p className="infoBox">📌 Warsaw, Poland</p>
                                    <p className="infoBox">📌 Warsaw, Poland</p>
                              </div>
                        </Card>
                        <AboutText>
                              <p>Sint nulla in duis amet exercitation aute culpa. Magna incididunt quis est laborum pariatur ut sunt ex exercitation.
                              Eiusmod velit officia excepteur aliquip ut duis aliqua labore enim dolore elit. Esse ullamco ut incididunt proident nulla reprehenderit.
                              Commodo velit excepteur elit laboris aute labore cupidatat voluptate quis enim deserunt aute. Commodo consectetur exercitation sit non enim
                              nisi eu ipsum minim eu dolor.</p>
                              <p>Sint nulla in duis amet exercitation aute culpa. Magna incididunt quis est laborum pariatur ut sunt ex exercitation.
                              Eiusmod velit officia excepteur aliquip ut duis aliqua labore enim dolore elit. Esse ullamco ut incididunt proident nulla reprehenderit.
                              Commodo velit excepteur elit laboris aute labore cupidatat voluptate quis enim deserunt aute. Commodo consectetur exercitation sit non enim
                              nisi eu ipsum minim eu dolor.</p>
                        </AboutText>
                  </Content>

                  <SvgContainer>
                        <AboutScene></AboutScene>
                  </SvgContainer>
            </Wrapper>
      );
}

export default About;