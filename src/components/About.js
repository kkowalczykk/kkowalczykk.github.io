import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as AboutScene } from '../media/about_me_1.svg';
import photo from '../media/photo.jpg'
import gsap from 'gsap';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      @media screen and (min-width: 850px) {
            flex-direction: row-reverse;
      }
      margin-bottom: 50px;

`
const Content = styled.div`
      width: 90%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 10px 0;
      @media screen and (min-width: 850px) {
            width: 50%;
      }
`

const Card = styled.div`
      width: 90%;
      max-width: 400px;
      min-height: 200px;
      background: white;
      border-radius: 15px;
      box-shadow: 0px 5px 5px 2px rgba(0,0,0,0.35);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0;
      @media screen and (min-width: 850px) {
            flex-direction: row;
      }
      @media screen and (min-width: 1240px){
            max-width: 600px;  
      }
      .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background: none;
            width: 80%;
            @media screen and (min-width: 850px) {
                  width: calc(100% - 170px);
            }
            @media screen and (min-width: 1240px){
                  width: calc(100% - 190px);
            }
            p{
                  display: flex;
                  width: 80%;
                  background-color: rgb(68,12,115);
                  color: white;
                  text-shadow: 0px 0px 7px white;
                  height: 30px;
                  border-radius: 15px;
                  padding: 3px 5px;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.35);
                  font-size: 0.9em;
                        span{
                        background: none;
                        margin-right: 5px;
                        }
            }
      }
`

const AboutText = styled.div`
      
      width: 90%;
      @media screen and (min-width: 1240px){
            max-width: 600px;  
      }
      p{
            text-align: justify;
            line-height:1.5em;
            margin-top: 30px;
            
      }


`

const ImgContainer = styled.div`
      width: 150px;
      height: 150px;
      background: none;
      overflow:hidden;
      margin: 10px 10px;
      @media screen and (min-width: 1240px){
            width: 170px;
            height: 170px; 
      }
`

const Image = styled.img`
      box-sizing: border-box;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 4px solid rgb(68,12,115);
      @media screen and (min-width: 1240px){
            width: 170px;
            height: 170px; 
      }
`
const SvgContainer = styled.div`
      width: 90%;
      @media screen and (min-width: 850px) {
            width: 40%;
      }
      svg{
            width: 100%;
            height: auto;
      }
`



const About = (props) => {
      const [age, setAge] = useState(0);
      const svgwrapper = useRef(null);
      const card = useRef(null);
      const aboutText = useRef(null);


      useEffect(() => {
            props.updateTitle('About');
            getAge();


            //Catch svg elements
            const [elements] = svgwrapper.current.children;
            const background = elements.getElementById('background');
            const text = elements.getElementById('text');
            const content = elements.getElementById('content');
            const window = elements.getElementById('window');

            //Animations
            const svgtl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
            svgtl.fromTo(window, { opacity: '0', y: '200', }, { opacity: '1', y: '0', duration: '1' })
            svgtl.fromTo(background, { opacity: '0', y: '100', }, { opacity: '1', y: '0', duration: '0.6' }, 1)
            svgtl.fromTo(content, { opacity: '0', y: '-100', }, { opacity: '1', y: '0', duration: '1.3' }, 1.5)
            svgtl.fromTo(text, { opacity: '0' }, { opacity: '1', duration: '1.3' }, 2)

            //catch content elements
            console.log(card.current, aboutText.current);
            const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
            tl.fromTo(card.current, { opacity: '0', y: '-50', }, { opacity: '1', y: '0', duration: '1' });
            tl.fromTo(aboutText.current, { opacity: '0', y: '50', }, { opacity: '1', y: '0', duration: '1' });
      }, [])

      const getAge = () => {
            let diff = new Date().getTime() - new Date(1997, 8, 17).getTime();
            setAge(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)));
            console.log(age);
      }



      return (
            <Wrapper>

                  <Content>
                        <Card ref={card}>
                              <ImgContainer>
                                    <Image src={photo}></Image>
                              </ImgContainer>
                              <div className="content">
                                    <p className="infoBox"><span>🙋‍♂️</span>  Karol Kowalczyk</p>
                                    <p className="infoBox"><span>📌</span> Warsaw, Poland</p>
                                    <p className="infoBox"> Age: {age}</p>
                              </div>
                        </Card>
                        <AboutText ref={aboutText}>
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
                  <SvgContainer ref={svgwrapper}>
                        <AboutScene></AboutScene>
                  </SvgContainer>

            </Wrapper>
      );
}

export default About;