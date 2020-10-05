import React, { useRef, useEffect } from 'react';
import ParticlesComponent from './ParticlesComponent';
import styled from 'styled-components';
import Typical from 'react-typical';
import gsap from 'gsap';

const Wrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 100%;
      position: fixed;
      top: 0;
`

const Box = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgb(68 12 115);
      z-index: 2;
      background: none;
`

const Text = styled.h1`
      display: block;
      margin: 5px 0;
      min-height: 35px;
      text-align: center;
      background: none;
`

const AnimatedText = styled(Typical)`
      color: rgb(68 12 115);
      margin: 5px 0;
      font-size: 1.3em;
      min-height: 30px;
      text-align: center;
      line-height: 1.4em;
      background: none;
`

const Home = () => {
      const wrapper = useRef(null);

      useEffect(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.in' } });
            // Animations
            const elements = Array.from(wrapper.current.children);
            console.log(elements)
            const particles = elements[0];
            tl.from(particles, { opacity: 0, duration: '2.5' });
      })
      return (
            <Wrapper ref={wrapper}>
                  <ParticlesComponent />
                  <Box>
                        <Text>Hello, my name is Karol</Text>
                        <AnimatedText steps={["I'm", 0, "I'm Frontend Developer 💻", 4000, "I'm programming passionate ✔", 4000, "I'm student 🎓", 4000]} loop={Infinity} />
                  </Box>
            </Wrapper>
      );
}

export default Home;