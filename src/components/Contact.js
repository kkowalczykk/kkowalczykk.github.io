import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ContactScene } from '../media/contact_1.svg';
import { AiFillGithub, AiFillFacebook, AiOutlineMail } from 'react-icons/ai';
import { useRef } from 'react';
import gsap from 'gsap';

const Wrapper = styled.div`
      width: 100%;
      min-height: 500px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
`

const SvgContainer = styled.div`
      margin: 15px 0;
      width: 75%;
      svg{
            width: 100%;
            height: auto;
      }

      @media screen and (min-width: 850px) {
            width: 40%;
      }
`

const Content = styled.div`
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: 850px) {
            width: 50%;
      }

      p{
            text-align: center;
      }

      li{
            list-style: none;
            display: flex;
            flex-direction: column;
      }

      ul{
            text-align: center;
            align-self: center;
            padding: 0;
            margin: 10px 0;

            a{
            text-decoration: none;
            display: flex;
            align-items: center;
            font-size: 1.1em;
            color: rgb(68,12,115);
            .icon{
                  font-size: 1.5em;
                  margin-right: 10px;
            }
      }
      
      }

     
`

const CvButton = styled.div`
      width: 200px;
      height: 30px;
      background-color: rgb(68,12,115);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s all ease-in-out;
      margin-top: 30px;
      &:hover{
            background-color: rgb(85,10, 140);
      }
`

const Contact = (props) => {
      const svgwrapper = useRef(null);
      const text = useRef(null);
      useEffect(() => {
            props.updateTitle('Contact');

            //Catch svg elements
            const [elements] = svgwrapper.current.children;
            const person = elements.getElementById('person');
            const primary = elements.getElementById('primary');
            const secondary = elements.getElementById('secondary');

            //Animate svg
            const svgtl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
            svgtl.fromTo(person, { opacity: '0', y: '200', }, { opacity: '1', y: '0', duration: '1' })
            svgtl.fromTo(primary, { opacity: '0', y: '100', }, { opacity: '1', y: '0', duration: '0.6' }, 1)
            svgtl.fromTo(secondary, { opacity: '0', y: '-100', }, { opacity: '1', y: '0', duration: '1.3' }, 1.5)

            //Animate rest of elements
            gsap.fromTo(text.current, { opacity: '0', y: '-50', }, { opacity: '1', y: '0', duration: '1' })
      }, [])
      return (
            <Wrapper>
                  <SvgContainer ref={svgwrapper}>
                        <ContactScene></ContactScene>
                  </SvgContainer>
                  <Content ref={text}>
                        <p>You can find me in these places. Feel free to hit me up with a message 📩👐</p>
                        <li>
                              <ul><a target="_blank" rel="noopener noreferrer" href="https://github.com/kkowalczykk"><AiFillGithub className='icon'></AiFillGithub> kkowalczykk</a></ul>
                              <ul><a target="_blank" rel="noopener noreferrer" href="mailto:kovalczyk97@gmail.com"><AiOutlineMail className='icon'></AiOutlineMail> kovalczyk97@gmail.com</a></ul>
                              <ul><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/karol.kowalczyk97"><AiFillFacebook className='icon'></AiFillFacebook>Karol Kowalczyk</a></ul>
                        </li>
                        <a href="../media/cv" style={{ textDecoration: 'none' }} download><CvButton>Download CV</CvButton></a>
                  </Content>
            </Wrapper>
      );
}

export default Contact;