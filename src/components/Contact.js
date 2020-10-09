import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ContactScene } from '../media/contact.svg';
import { AiFillGithub, AiFillFacebook, AiOutlineMail } from 'react-icons/ai';

const Wrapper = styled.div`
      width: 100%;
      min-height: 500px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
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
      useEffect(() => {
            props.updateTitle('Contact');

      })
      return (
            <Wrapper>
                  <SvgContainer>
                        <ContactScene></ContactScene>
                  </SvgContainer>
                  <Content>
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